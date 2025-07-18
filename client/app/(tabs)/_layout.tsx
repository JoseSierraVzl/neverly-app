import { Tabs } from 'expo-router';
import { TabBarIcon } from '../../components/TabBarIcon';
import ThemeToggle from '~/components/features/ThemeToggle';
import { PlusAddIcon } from '~/components';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#4F46E5',
                tabBarStyle: {
                    position: 'absolute',
                    paddingTop: 5,
                    height: 65,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderTopWidth: 0,
                    backgroundColor: 'white',
                },
                tabBarLabelStyle: {
                    display: 'none',
                },
                tabBarIconStyle: {
                    marginTop: 8,
                },
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <TabBarIcon size={30} name="home" color={color} />,
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name="postList"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <TabBarIcon size={28} name="th-list" color={color} />,
                    headerRight: () => <ThemeToggle />,
                }}
            />
            <Tabs.Screen
                name="addPost"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <PlusAddIcon size={45} />,
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <TabBarIcon size={28} name="heart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '',
                    tabBarIcon: ({ color }) => <TabBarIcon size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
