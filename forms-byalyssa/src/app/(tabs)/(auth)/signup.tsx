import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import { SafeAreaProvider } from "react-native-safe-area-context";

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

export default function SignUpScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => console.log(values)}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <FormInput
                label="Full Name"
                value={values.fullName}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur('fullName')}
                error={touched.fullName && errors.fullName}
              />

              <FormInput
                label="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
              />

              <FormInput
                label="Password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur('password')}
                error={touched.password && errors.password}
              />

              <FormInput
                label="Confirm Password"
                secureTextEntry
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur('confirmPassword')}
                error={touched.confirmPassword && errors.confirmPassword}
              />

              <SubmitButton
                title="Sign Up"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    marginTop: 30,
    backgroundColor: "#f9f9f9" 
   },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 40,
    textAlign: 'center',
  },
});
