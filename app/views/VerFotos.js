import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image,
    StyleSheet,
    Alert
} from 'react-native';
import { PhotoStyles } from '../styles/PhotoStyles.js';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';
import firestore from '@react-native-firebase/firestore';





const styles = StyleSheet.create({
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageBox: {
    width: 300,
    height: 300,
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: "center",
  },
  progressBarContainer: {
    marginTop: 20,
  }
});



export class VerFotos extends React.Component {
    constructor(props) {
        super();
        this.state = {
            imageData: null,
            setImage: null,
            uri: null,
            uploading: false,
            setUploading: false,
            setTransferred: 0
         
        };
    }

    componentDidMount() {
        this.extractRequiredImageData();
    }

    extractRequiredImageData = () => {
        let imageData = this.props.route.params;
        console.log("imageData", imageData)
        let document = imageData.document;
        let uri = null;
        let path = imageData.path.split('/');
        console.log("path", path)
        imageData.fileName = path[path.length - 1];
            

        uri = imageData.path;
        
        this.setState({
            imageData:imageData,
            uri:uri
        },() => console.log("urio", uri));
        
        firestore().collection('retos').doc(document).set({imageData:uri}, { merge: true });
                
    };
    

    uploadImage = async () => {
    
        let imageData = this.props.route.params;
        console.log("imageDatadeUpload", imageData)
        let document = imageData.document;
        const { uri } = this.state.uri;
        const filename = this.state.uri.substring(this.state.uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? this.state.uri.replace('file://', '') : this.state.uri;
        let uriStorage = 'https://firebasestorage.googleapis.com/v0/b/thebest-110a1.appspot.com/o/' + filename + '?alt=media';
        console.log("uriStorage", uriStorage)
      
        this.setState({
            setUploading:true, setTransferred:0,
            uri:uriStorage
        },() => console.log("uriStorage1", uriStorage, "this.setState.uri1", this.state.uri));
      
        const task = storage()
          .ref(filename)
          .putFile(uploadUri);
      
        // set progress state
        task.on('state_changed', snapshot => {
          this.setState({
              setTransferred:Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          });
        });
        
        try {
          await task;
        } catch (e) {
          console.error(e);
        }
      
        this.setState({
            setUploading:false
        });
      
        Alert.alert(
          '¡Foto subida!',
          '¡Se ha subido tu foto a Firebase Cloud Storage!'
        );
      
        this.setState ({
            setImage:null,
            uri:uriStorage
        },() => console.log("this.state.uri2", this.state.uri));

        console.log("uriStorage2", "document storage", uriStorage, document)
        firestore().collection('retos').doc(document).set({imageData:uriStorage}, { merge: true });
        this.props.navigation.navigate('DetalleReto', {uri:this.state.uri})
    };

    render() {
        return (
            <View style={PhotoStyles.imageViewerContainer}>
                <View style={styles.imageContainer}>
                    {this.state.uri !== null ? (
                    <Image source={{ uri: this.state.uri }} style={styles.imageBox} />) : null}
                    {this.state.uploading ? (
                    <View style={styles.progressBarContainer}>
                        <Progress.Bar progress={this.state.setTransferred} width={300} />
                    </View>
                ) : (
                <TouchableOpacity style={styles.uploadButton} onPress={this.uploadImage}>
                    <Text style={styles.buttonText}>Subir icono</Text>
                </TouchableOpacity>
                )}
                </View>
            </View>
        );
    }
}