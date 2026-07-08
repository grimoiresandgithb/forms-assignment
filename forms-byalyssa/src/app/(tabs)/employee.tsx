import { Text, View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";
import GlobalNav from "@/components/GlobalNav";

const EmployeeSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  emaail: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone must be 10 digits').required('Phone is required'),
  position: Yup.string().required('Position is required'),
  employeeId: Yup.string().min(4, 'ID must be at least 4 characters').required('Employee ID required'),
});

export default function EmployeeFormScreen() {
  return (
    <View style={styles.container}>
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
      >
        {({
          handleChange, handleSubmit, values, errors, touched, isValid
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
              onChangeText={handleChange('email')}
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
              error={touched.position && errors.position}
            />

            <SubmitButton
              title='Submit'
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
  container: { padding: 20 },
});