import { useState } from 'react';
import { VStack, FlatList } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
    const [groups, setGroups] = useState(['costa', 'ombro', 'triceps', 'bíceps']);
    const [groupSelected, setGroupSelected] = useState('costa');
    
    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group 
                        name={item}
                        isActive={groupSelected === item} 
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
            />
        </VStack>
    );
}