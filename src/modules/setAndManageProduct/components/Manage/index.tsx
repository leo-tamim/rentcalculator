import React, { useEffect, useState } from "react";
import AppGridContainer from "../../../../@crema/core/AppGridContainer";
import Grid from "@mui/material/Grid";
import CommonButton from "@/modules/common/components/CommonButton/CommonButton";
import CommonCard from "@/modules/common/components/CommonCard";
import PageTitle from "@/modules/common/components/PageTitle";
import { useRouter } from "next/router";
import { IProduct, IGetProductFilter } from "../complain";
import GET_PRODUCT from "../../gql/get";
import ActiveStatus from "@/modules/common/components/ActiveStatus";
import EditIcon from "@mui/icons-material/Edit";
import CommonSimpleTable from "@/modules/common/components/CommonSimpleTable";
import CommonModal from "@/modules/setAndManageProduct/components/Book";
import Box from "@mui/material/Box";
import { FcRules } from "react-icons/fc";
import Alert from "@mui/material/Alert";
import Filters from "../Filter/index";
import Styles from "./Styels.module.scss";
import { useAppDispatch } from "@/store";
import { showModal } from "@/store/modal/modalOpenClose";

const ManageProduct = () => {
  const router = useRouter();
  const [product, setProducts] = useState<IProduct[]>([]);
  const [productCount, setProductCount] = useState<number>(0);
  const [filters, setFilters] = useState<IGetProductFilter>({});
  const [response, setResponse] = useState<any>([]);

  const [book, setBook] = useState<any>({});
  const dispatch = useAppDispatch();

  const handleOpen = (index: number, item: IProduct, action: string) => {
    dispatch(showModal({ type: "done" }));
    console.log(index, "indexx");
    setBook({
      index: index,
      value: item,
      action: action,
    });
  };

  //Get Complains Response Using Querys
  //Get Complains Function
  const getProducts = () => {
    console.log(filters?.code, "code");
    if (filters?.code != undefined || filters?.name != undefined) {
      setResponse({
        result: {
          count: 0,
          product: [],
          statusCode: 200,
        },
      });
    } else {
      const response = GET_PRODUCT();
      setResponse(response);
    }
  };
  const getFilter = async (value: any) => {
    const filter = product.filter((item) => {
      if (item?.code == value || item?.name == value) {
        return item;
      }
    });
    setProducts([...filter]);
  };

  useEffect(() => {
    if (response.result?.statusCode === 200) {
      setProducts((pr) => [...pr, ...response.result.product!]);
      setProductCount(response.result.count!);
    }
  }, [response]);

  useEffect(() => {
    getProducts();
    getFilter(filters?.code ? filters?.code : filters?.name);
  }, [filters]);

  return (
    <>
      <Box
        component="h2"
        sx={{
          fontSize: 16,
          color: "text.primary",
          fontWeight: "600",
          mb: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        Set And Manage {"> "}
        <span style={{ color: "rgb(235, 141, 52)" }}>Product</span>
      </Box>
      <CommonCard>
        <PageTitle
          icon={<FcRules fontSize={"36px"} color="#eb8d34" />}
          action={
            <CommonButton
              onClick={() => {
                router.push("/");
              }}
              color="info"
            >
              Add Product
            </CommonButton>
          }
        >
          Manage Product
        </PageTitle>
        <AppGridContainer spacing={4}>
          <Grid item xs={12} md={12}>
            <Alert severity="info">
              Since we have upgraded the product management, For a better
              experience, Repair Status Red Means No need to repair and Green
              Means Need To Repair'
            </Alert>
          </Grid>
          <Grid item xs={12} md={12}></Grid>
          <Filters filters={filters} onChangeFilters={setFilters} />

          <Grid item xs={12} md={12}>
            <CommonSimpleTable
              data={product}
              headers={[
                {
                  field: "code",
                  headerName: "ID",
                },
                {
                  field: "name",
                  headerName: "Product Name",
                },
                {
                  field: "minimum_rent_period",
                  headerName: "Rental Period",
                },
                {
                  field: "durability",
                  headerName: "Durability",
                },
                {
                  field: "max_durability",
                  headerName: "Max Durability",
                },
                {
                  field: "mileage",
                  headerName: "Mileage",
                },
                {
                  field: "type",
                  headerName: "Type",
                  buildCell: (item: IProduct) => (
                    <div>
                      {item?.type === "plain" && (
                        <span className={Styles.processing}>{item?.type}</span>
                      )}
                      {item?.type === "meter" && (
                        <span className={Styles.pending}>{item?.type}</span>
                      )}
                      {item?.type === "RESOLVED" && (
                        <span className={Styles.resolve}>{item?.type}</span>
                      )}
                    </div>
                  ),
                  align: "center",
                },
                {
                  field: "price",
                  headerName: "Price",
                },
                {
                  field: "needing_repair",
                  headerName: "Repair status",
                  buildCell: (item: IProduct) => (
                    <ActiveStatus isActive={item?.needing_repair} />
                  ),
                  align: "center",
                },
                {
                  field: "price",
                  headerName: "Actions",
                  buildCell: (item: IProduct, index: number) => [
                    <CommonButton
                      variant="outlined"
                      icon={<EditIcon fontSize="small" />}
                      key={item?.code}
                      size="small"
                      onClick={(e) => handleOpen(index, item, "book")}
                    >
                      Book Now
                    </CommonButton>,
                    <CommonButton
                      variant="outlined"
                      icon={<EditIcon fontSize="small" />}
                      key={item?.name}
                      size="small"
                      color="error"
                      onClick={(e) => {
                        handleOpen(index, item, "return");
                      }}
                    >
                      Return
                    </CommonButton>,
                  ],
                },
              ]}
              hasMore={product.length < productCount}
              loadMore={getProducts}
            />
          </Grid>
          <CommonModal value={book} options={product} />
        </AppGridContainer>
      </CommonCard>
    </>
  );
};

export default ManageProduct;
