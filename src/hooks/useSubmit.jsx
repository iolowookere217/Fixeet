import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useSubmit = (schema) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return { register, handleSubmit, errors, control, reset };
};

export default useSubmit;

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// const useSubmit = (schema) => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         resolver: yupResolver(schema),
//     });
//     return { register, handleSubmit, errors };
// };

// export default useSubmit;
