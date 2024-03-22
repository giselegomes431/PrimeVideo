import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function MoviesCard2(props) {
  return (
    <TouchableOpacity>
        <Image 
        style={styles.img}
        source={props.movieURL}
        />
        <AntDesign name="playcircleo" size={30} color="white" style={styles.iconThumb} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    img: {
        marginRight:20,
    },

    iconThumb: {
        top:40, 
        left:8, 
        zIndex:1, 
        position:"absolute", 
    }
})