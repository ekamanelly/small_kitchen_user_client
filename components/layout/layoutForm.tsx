import { type } from "os";
import { useRecoilState } from "recoil";
import { RevealForm } from "../../atoms";
import CustomButton from "../forms/customButton";
import CustomInput from "../forms/customInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextArea from "../forms/customTextArea";
import { useRouter } from "next/router";

type LayoutProps = {
  cols: string;
};

function LayoutForm() {
  const [reveal, setReveal] = useRecoilState(RevealForm);
  const router = useRouter();
  const handleForm = () => {
    router.replace("/dashboard");
    // setReveal(!reveal);
  };
  interface initialValues {
    companyName: "";
    description: "";
    city: "";
    country: "";
    state: "";
  }
  const handleFormSubmit = async (initialValues?: initialValues) => {
    // value.sharedPreference = getOrStoreId();
    // const user = await mutateAsync(value);
    // console.log({ user });
    // if (user.status) {
    //   getOrStoreId(user.body.sharedPreference);
    //   window.location.href = user.body.pay;
    // }
  };

  //form validation
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      companyName: "",
      description: "",
      city: "",
      country: "",
      state: "",
      phone: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      city: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      country: Yup.string().max(15, "Must be 20 characters or less"),
      // .required("Required"),
      state: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required, abi you wan dash me"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone Number is not valid")
        .required("Required, dispatch rider needs to call you"),
    }),
    onSubmit: (values) => {
      handleFormSubmit();
    },
  });

  return (
    <div className="container">
      <div
        onDoubleClick={handleForm}
        className="p-4 w-full flex justify-center  h-full z-100  "
        // style={{ backgroundColor: "red" }}
      >
        <div className=" p-4 w-2/5 center bg-lime-300 ">
          <form onSubmit={formik.handleSubmit}>
            <CustomInput value="company's name" label="company name" />
            <CustomInput
              value="phone"
              label="phone number"
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              err={formik.errors["phone"]}
              touched={formik.touched["phone"]}
            />
            <div className=" mt-10 flex flex-row-reverse">
              <CustomInput
                value="state"
                label="state "
                onchange={formik.handleChange}
                onblur={formik.handleBlur}
                err={formik.errors["state"]}
                touched={formik.touched["state"]}
              />
              <CustomInput
                value="country"
                label="country "
                onchange={formik.handleChange}
                onblur={formik.handleBlur}
                err={formik.errors["country"]}
                touched={formik.touched["country"]}
              />
            </div>
            <CustomTextArea
              value="description"
              label="description "
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              err={formik.errors["description"]}
              touched={formik.touched["description"]}
            />

            <div className=" mt-10 flex flex-row-reverse">
              <CustomButton value="Sorry!" />
              <CustomButton value="I like this, save!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LayoutForm;
