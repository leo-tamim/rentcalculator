import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SelectChangeEvent } from "@mui/material/Select";
import AppGridContainer from "@/@crema/core/AppGridContainer";
import Grid from "@mui/material/Grid";
import CommonAutocomplete from "@/modules/common/components/CommonAutocomplete";
import { useFormik } from "formik";
import * as yup from "yup";
import CommonButton from "@/modules/common/components/CommonButton/CommonButton";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, showModal } from "@/store/modal/modalOpenClose";
import { showSnackbar } from "@/store/ducks/snackbar";

export interface IProduct {
  code?: string;
  name?: string;
  type?: string;
  availability?: boolean;
  needing_repair?: boolean;
  durability?: number;
  isActive?: boolean;
  max_durability: number;
  mileage?: number | null;
  price: number;
  minimum_rent_period: number;
}

interface ICommonModal {
  options?: IProduct[];
  onChange?: (event: SelectChangeEvent) => void;
  errorText?: string;
  helperText?: string;
  formik?: any;
  value?: { index: number; value: IProduct; action: string } | undefined;
  open?: boolean;
  index?: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const validationSchema = yup.object({
  product: yup.object(),
  duration: yup.number(),
});

export default function CommonModal({ value, options, index }: ICommonModal) {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.modal);

  console.log(value?.value, "Books Value");
  console.log(value?.action, "Books action");
  const arr: any = options?.length ? options : [];
  const [bookCalculation, setBookCalculation] = useState<boolean>(false);

  const handleClose = (event: React.SyntheticEvent | Event, reason: string) => {
    if (reason === "backdropClick") {
      return;
    }
    dispatch(hideModal());
  };

  const onSubmit = async (values: any) => {
    console.log(values, "formik val");
  };

  const [fromDate, setValue] = useState<Dayjs | null>(
    dayjs("2022-11-01T21:11:54")
  );

  const [toDate, setToDate] = useState<Dayjs | null>(
    dayjs("2022-11-01T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleToDate = (newValue: Dayjs | null) => {
    setToDate(newValue);
  };

  const [minRentValidation, setMinRentValidation] = useState<boolean>(false);

  console.log(fromDate?.day());
  console.log(toDate?.day());

  const formik = useFormik({
    initialValues: {
      product: {
        label: "",
        value: "",
      },
      duration: 0,
      price: 0,
    },
    validationSchema,
    onSubmit,
    validateOnChange: false,
  });
  console.log({ formik });

  useEffect(() => {
    if (value?.value?.code) {
      formik.setValues({
        product: {
          label: `${value?.value?.code} ${value?.value?.name}`,
          value: value?.value?.code,
        },
        duration: 0,
        price: 0,
      });
    }
  }, [value]);

  useEffect(() => {
    if (fromDate?.day() != undefined && toDate?.day() != undefined) {
      const toDay: any = toDate?.day();
      const fromDay: any = fromDate?.day();
      let minRent: any = value?.value?.minimum_rent_period;

      if (minRent <= toDay - fromDay && value?.value?.code) {
        console.log("in", toDay, fromDay, minRent);
        setMinRentValidation(false);
        formik.setValues({
          product: {
            label: `${value?.value?.code} ${value?.value?.name}`,
            value: value?.value?.code,
          },
          duration: toDay - fromDay,
          price: value?.value?.price,
        });
      } else {
        setMinRentValidation(true);
      }
    }
  }, [fromDate, toDate, value]);

  return (
    <div>
      <Modal
        open={modal.modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        key={index}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Product {value?.action == "book" ? "Book" : "Retun"}
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "red" }}
          >
            {value?.action == "book"
              ? `Minimum Rent Period : ${value?.value?.minimum_rent_period} Day`
              : ""}
          </Typography>
          <br />

          {bookCalculation ? (
            <AppGridContainer spacing={4}>
              <Grid item xs={12} md={12}>
                <p>
                  Your Estimated Price is : ${" "}
                  {formik?.values?.duration * formik?.values?.price}
                </p>
                <p>Do you want to procedure</p>
              </Grid>

              <Grid item xs={12} md={12}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}></Grid>
                  <Grid item xs={12} md={4}>
                    <CommonButton
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        dispatch(hideModal());
                        setBookCalculation(false);
                      }}
                      color="error"
                    >
                      No
                    </CommonButton>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CommonButton
                      type="submit"
                      fullWidth
                      onClick={(event) => {
                        setBookCalculation(false);
                        dispatch(hideModal());
                        value?.action == "book"
                          ? dispatch(
                              showSnackbar({
                                type: "success",
                                message: "Book Successfully!",
                              })
                            )
                          : dispatch(
                              showSnackbar({
                                type: "success",
                                message: "Return Successfully!",
                              })
                            );
                      }}
                      color="info"
                    >
                      Yes
                    </CommonButton>
                  </Grid>
                </Grid>
              </Grid>
            </AppGridContainer>
          ) : (
            <AppGridContainer spacing={4}>
              <Grid item xs={12} md={12}>
                <CommonAutocomplete
                  name="product"
                  label="Select Product"
                  options={
                    arr?.length
                      ? arr.map((op: any) => ({
                          label: `${op?.code} ${op?.name}`,
                          value: op?.code,
                        }))
                      : []
                  }
                  formik={formik}
                  disabled
                />
              </Grid>
              {value?.action == "book" ? (
                <>
                  <Grid item xs={12} md={6}>
                    <DesktopDatePicker
                      label="From Date"
                      inputFormat="MM/DD/YYYY"
                      value={fromDate}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DesktopDatePicker
                      label="To Date"
                      inputFormat="MM/DD/YYYY"
                      value={toDate}
                      onChange={handleToDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={12}>
                    <p>
                      Minimum Rent Period : {value?.value?.minimum_rent_period}
                    </p>

                    <p>
                      Need To Repair :{" "}
                      {value?.value?.needing_repair ? "Yes" : "No"}
                    </p>
                  </Grid>
                </>
              )}

              <Grid item xs={12} md={12}>
                {minRentValidation && value?.action == "book"
                  ? "You Have To Over or Equal Min Rent Day"
                  : ""}
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}></Grid>
                  <Grid item xs={12} md={4}>
                    <CommonButton
                      fullWidth
                      variant="outlined"
                      onClick={() => dispatch(hideModal())}
                      color="error"
                    >
                      No
                    </CommonButton>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CommonButton
                      type="submit"
                      fullWidth
                      onClick={(event) => {
                        setBookCalculation(true);
                      }}
                      color="info"
                      disabled={minRentValidation && value?.action == "book"}
                    >
                      Yes
                    </CommonButton>
                  </Grid>
                </Grid>
              </Grid>
            </AppGridContainer>
          )}
        </Box>
      </Modal>
    </div>
  );
}
