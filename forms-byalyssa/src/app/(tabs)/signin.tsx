import { Text, View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import { SafeAreaProvider } from "react-native-safe-area-context";

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Password required'),
});

export default function SignInScreen() {
    return  (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.title}>Sign In</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={SignInSchema}
                    onSubmit={(values) => console.log('Sign in submitted: ', values)}
                >
                    {({ handleChange, handleSubmit, handleBlur, values, errors, touched, isValid, }) => (
                        <View>
                            <FormInput
                                label='Email'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                error={touched.email && errors.email}
                            />

                            <FormInput
                                label='Password'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                error={touched.password && errors.password}
                                secureTextEntry
                            />

                            <SubmitButton
                                title='Sign In'
                                disabled={!isValid}
                                onPress={handleSubmit}
                            />

                        </View>
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