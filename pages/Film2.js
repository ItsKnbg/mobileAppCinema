import { View, Text, Button } from "react-native";

export default function Film2({ navigation }) {
    return (
        <View>
            <Text>Film2</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Film1" onPress={() => navigation.navigate('Film1')} />
            <Button title="Film2" onPress={() => navigation.navigate('Film2')} />
            <Button title='Film3' onPress={() => navigation.navigate('Film3')} />
        </View>
    )
}