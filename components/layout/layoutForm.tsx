import { type } from "os";
import { useRecoilState } from "recoil";
// import { RevealForm } from "../../atoms";
import CustomButton from "../forms/customButton";
import CustomInput from "../forms/customInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextArea from "../forms/customTextArea";
import { useRouter } from "next/router";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";
import { BusinessDetails, RevealForm } from "../../atoms";

function LayoutForm() {
  const [, setRegistrationDetails] = useRecoilState(BusinessDetails);
  const [revealForm, setRevealForm] = useRecoilState(RevealForm);

  const router = useRouter();
  const handleForm = () => {
    router.replace("/dashboard");
    // setReveal(!reveal);
  };
  interface initialValues {
    companyName: string;
    description: string;
    country: string;
    state: string;
    phone: string;
    city: string;
  }
  const handleFormSubmit = async (initialValues: any) => {};

  //form validation
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      companyName: "",
      description: "",
      country: "",
      state: "",
      phone: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please provide a name for your business"),
      description: Yup.string()
        .min(24, "please tell more about your business")
        .max(100, "you have said a lot, can you trim out small")
        .required("you can't leave this field empty"),
      country: Yup.string().required("you can't leave this field empty"),
      state: Yup.string().required("you can't leave this field empty"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone Number is not valid")
        .required("Required! i need your phone number"),
    }),
    onSubmit: (values) => {
      setRegistrationDetails(values);
      setRevealForm(!revealForm);
    },
  });

  return (
    <div className="container">
      <div
        onDoubleClick={handleForm}
        className="p-4 w-full flex justify-center  h-full z-100  "
      >
        <div className=" p-4 lg:w-2/5 md:w-4/5 center bg-lime-300 ">
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              icon={<BsFillBriefcaseFill />}
              value="Chef Blast "
              label="Company name"
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              name="companyName"
              err={formik.errors["companyName"]}
              touched={formik.touched["companyName"]}
            />
            <CustomInput
              icon={<BsFillTelephoneForwardFill />}
              value="07082571949"
              label="Phone Number"
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              name="phone"
              err={formik.errors["phone"]}
              touched={formik.touched["phone"]}
            />
            <div className=" mt-10 flex flex-row-reverse">
              <CustomInput
                icon={<BsFillGeoAltFill />}
                value="state"
                label="State "
                name="state"
                onchange={formik.handleChange}
                onblur={formik.handleBlur}
                err={formik.errors["state"]}
                touched={formik.touched["state"]}
              />
              <CustomInput
                icon={<BsGlobe />}
                value="country"
                label="Country"
                name="country"
                onchange={formik.handleChange}
                onblur={formik.handleBlur}
                err={formik.errors["country"]}
                touched={formik.touched["country"]}
              />
            </div>
            <CustomTextArea
              icon={<BsBrush />}
              value="folk are easy to tell or listen to?"
              label="Description "
              name="description"
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              err={formik.errors["description"]}
              touched={formik.touched["description"]}
            />

            <div className=" mt-10 flex flex-end">
              <CustomButton value="I like this, save!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LayoutForm;
