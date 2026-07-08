import { Text, View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import GlobalNav from "@/components/GlobalNav";

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Password required'),
});

export default function SignInScreen() {
    return  (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={SignInSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleSubmit, values, errors, touched, isValid, }) => (
                    <View>
                        <FormInput
                            label='Email'
                            value={values.email}
                            onChangeText={handleChange('email')}
                            error={touched.email && errors.email}
                        />

                        <FormInput
                            label='Password'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            error={touched.password && errors.password}
                        />

                        <SubmitButton
                            title='Sign In'
                            disabled={!isValid}
                            onPress={handleSubmit}
                        />

                    </View>
                )}
            </Formik>
            <GlobalNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
});