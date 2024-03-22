import {View, 
        Text, 
        StyleSheet, 
        Image, 
        TouchableOpacity, 
        FlatList, 
        ScrollView} from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

import MovieTheWheel from "../../assets/movies/the_wheel_of_time.png"
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import MoviesCard from "../../components/MoviesCard";
import MoviesCard2 from "../../components/MoviesCard2";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image 
            source={PrimeVideoLogo}
            />
            <Image 
            source={AmazonLogo}
            style={styles.amazonLogoImg}
            />
        </View>

        <View style={styles.category}>
            <TouchableOpacity>
                <Text style={styles.categoryText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>TV Shows</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.categoryText}>Kids</Text>
            </TouchableOpacity>
        </View>

        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.contentMovies}
        >
        
        <TouchableOpacity style={styles.movieImageThumbnail}>
           <Image 
            source={MovieTheWheel}
            style={styles.thumbImage}
            />

            <Text style={[{top:100, left:230, zIndex:2, position:"absolute", color:"white",fontSize:18}]} >Watch now</Text>
            <AntDesign name="playcircleo" size={19} color="white" style={styles.iconThumb} />
        </TouchableOpacity>

        <Text style={styles.movieText}>Continue Watching</Text>
        <FlatList 
        data={MOVIESWATCHING}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <MoviesCard2 movieURL={item.moviesURL}/>}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Crime Movies</Text>
        <FlatList 
        data={MOVIESCRIME}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.movieText}>Watch in your language</Text>
        <FlatList 
        data={MOVIESWATCH}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
        />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#232F3E",
        alignItems:"flex-start",
        height:"100%"
    },

    header: {
        width:"100%",
        paddingTop:80,
        alignItems:"center",
        justifyContent:"center",
    },

    amazonLogoImg: {
        marginTop:-32,
        marginLeft:30,
    },

    category: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:30,
        marginBottom:15,
    },

    categoryText: {
        fontSize:14,
        fontWeight:"700",
        color:"#FFFFFF"
    },

    movieText: {
        color:"#FFFFFF",
        fontWeight:"700",
        padding:15,
    },

    movieImageThumbnail: {
        width:"100%",
        alignItems:"center",
        
    },

    contentList: {
        paddingLeft:18,
        paddingRight:30,
    },

    thumbText: {
        zIndex:1,
        position:"absolute",
        paddingTop:10
    },

    thumbImage: {
        zIndex:2,
    },

    iconThumb: {
        top:103, 
        left:205, 
        zIndex:2, 
        position:"absolute", 
    }
})