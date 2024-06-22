import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Input, TextField } from "@mui/material";
import styles from './addEmp.module.css';
import { CustomTextFeild } from "../styledComponents";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface IFormInput {
    firstName: string;
    lastName: string;
    personalEmail: string;
    mobileNumber: number;
    experience: number;
  }
  
  const schema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    personalEmail: yup.string().email('Must be a valid email').required('Email is required'),
    mobileNumber: yup
      .number()
      .typeError('Must be a valid phone number')
      .required('Mobile number is required'),
    experience: yup
      .number()
      .typeError('Experience must be a number')
      .positive('Experience must be a positive number')
      .integer('Experience must be an integer')
      .required('Experience is required'),
  }).required();

export function AddEmpDetailsComponent() {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
          firstName: "",
          lastName: "",
          personalEmail: "",
          mobileNumber: 0,
          experience: 0,
        },
        resolver: yupResolver(schema),
      });
    

   

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data,"data")
    }


    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <div className={styles.fieldContainer}>
                <label>First Name</label>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <input {...field} className={styles.textField} />}
                />
            </div>
            <div className={styles.fieldContainer}>
                <label>Last Name</label>
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => <input {...field} className={styles.textField} />}
                />
            </div>
            <div className={styles.fieldContainer}>
                <label>Mobile Number</label>
                <Controller
                    name="mobileNumber"
                    control={control}
                    render={({ field }) => <input {...field} className={styles.textField} />}
                />
            </div>
            <div className={styles.fieldContainer}>
                <label>Personal Email</label>
                <div>
                <Controller
                    name="personalEmail"
                    control={control}
                    render={({ field }) => <input {...field} className={styles.textField} />}
                />
                </div>
                {errors.personalEmail && <div>{errors.personalEmail.message}</div>}
            </div>
            <div className={styles.fieldContainer}>
                <label>Experience(in Years)</label>
                <Controller
                    name="experience"
                    control={control}
                    render={({ field }) => <input {...field} className={styles.textField} />}
                />
            </div>
            <input type="submit" className={styles.submitButton}/>
        </form>
        </div>
    )
}