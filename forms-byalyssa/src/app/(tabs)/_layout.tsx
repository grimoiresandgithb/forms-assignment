import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#4A90E2',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderColor: '#ddd',
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home'
                }}
            />

            <Tabs.Screen
                name='employee'
                options={{
                    title: 'Employee',
                }}
            />

            <Tabs.Screen
                name="signin"
                options={{
                    title: 'Sign In',
                }}
            />

            <Tabs.Screen
                name='signup'
                options={{
                    title: 'Sig Up'
                }}
            />
        </Tabs>
    )
}