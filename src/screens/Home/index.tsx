import React, { useState } from 'react';
import { CategorySelect } from '../../components/CategorySelect';
import { View, FlatList, Text } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {

    const [category, setCategory] = useState('');
    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>


            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider />}
                />

            </View>
        </Background>



    )
}