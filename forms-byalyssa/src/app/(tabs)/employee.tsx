import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import { SafeAreaProvider } from "react-native-safe-area-context";

const EmployeeSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone must be 10 digits').required('Phone is required'),
  position: Yup.string().required('Position is required'),
  employeeId: Yup.string().min(4, 'ID must be at least 4 characters').required('Employee ID required'),
});

export default function EmployeeFormScreen() {
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
      <View>

        <Text style={styles.title}>Employee Information</Text>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phone: '',
            position: '',
            employeeId: '',
          }}
          validationSchema={EmployeeSchema}
          onSubmit={(values) => console.log(values)}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({
            handleChange, handleSubmit, handleBlur, values, errors, touched, isValid
          }) => (
            <View>
              <FormInput
                label='Full Name'
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                error={touched.fullName && errors.fullName}
              />        

              <FormInput
                label='Email'
                value={values.email}
                onChangeText={handleChange('email')}
                error={touched.email && errors.email}
              />        

              <FormInput
                label='Phone'
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur= {handleBlur('phone')}
                error={touched.phone && errors.phone}
              />

              <FormInput
                label='Position'
                value={values.position}
                onChangeText={handleChange('position')}
                error={touched.position && errors.position}
              />

              <FormInput
                label='Employee ID'
                value={values.employeeId}
                onChangeText={handleChange('employeeId')}
                error={touched.employeeId && errors.employeeId}
              />

              <SubmitButton
                title='Submit'
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
            )}
        </Formik>
      </View>
      </ScrollView>
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