import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";
import {ActionSheet, Root} from 'native-base';
import ImagePicker from "react-native-image-crop-picker";
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';





const styles = StyleSheet.create({
  contenedor:{
    flex:1 ,
    backgroundColor: '#ffffff',
    alignContent:'center',
    flexDirection: 'column',

  },
  
  contenido:{
    flex:3,
    justifyContent:'center',
    alignContent:'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor:'#000000',
    backgroundColor:'#ffffff',
  },

  menuInferior:{
    flex:0.15,
    backgroundColor:'#0984e3',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
    borderColor:'#ffffff',
    borderWidth:2,
    borderRadius:20,

  },
  textoBoton:{
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:18
  },

  detalleRetoDetalle:{
    borderColor:'#ffffff',
    color: '#000000',
    margin: 5,
    fontSize:18,
    marginTop:20,
    marginLeft:40,
    justifyContent:'center',


  },

  detalleRetoTitulo:{
    borderColor:'#ffffff',
    color: '#000000',
    margin: 5,
    fontSize:18,
    marginTop:20,
    marginLeft:40,
    justifyContent:'center',
    textShadowColor: 'blue'


  },

  imageBox: {
    margin:40,
    width: 300,
    height: 300,
  }

});

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

export class DetalleReto extends React.Component {
  
  state = {
    uri: null,
    image: this.props.route.params.image,
  }

  constructor(props){
    super(props);
  };

  
  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
    })
        .then(image => {
            let imageData = image;
            if (imageData != null) {
                this.navigateToViewPhotos(imageData);
            }
        })
        .catch(err => {
            console.log('Error fetching image from Camera roll', err);
        });
  };
  
  choosePhotosFromGallery = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 200,
        cropping: true
    })
        .then(images => {
            if (images != null) {
              console.log("images",images)
              this.navigateToViewPhotos(images);
            }
        })
        .catch(err => {
            console.log(' Error fetching images from gallery ', err);
        });
  };
  
  selectImages = () => {
    const buttons = ['Camera', 'Photo Library', 'Cancel'];
    ActionSheet.show(
        {
            options: buttons,
            cancelButtonIndex: 2,
        },
        buttonIndex => {
            switch (buttonIndex) {
                case 0:
                    this.takePhotoFromCamera();
                    break;
                case 1:
                    this.choosePhotosFromGallery();
                    break;
                default:  
                    break;
            }
        },
    );
  } 

  navigateToViewPhotos = data => {
    let nombre = this.props.route.params.titulo;
    console.log("this.props.route.params.titulo", this.props.route.params.titulo);
    let image = this.props.route.params.image;
    this.setState ({image:image}, () => console.log("this.state.image", this.state.image))
    console.log("this.props.route.params.image", this.props.route.params.image);
    let imageData = null;
    let retos = firestore().collection('retos');
    let query = retos.where('nombre', '==', nombre).get()
      .then(snapshot => {
        if (snapshot.empty){
          console.log(nombre,'No hay documento con ese nombre.');
          return;
        }
    
      snapshot.forEach(doc => {
        console.log("doc.id => doc.data", doc.id, '=>', doc.data());
        data.document = doc.id;
        let uri = data.path;
        this.setState({uri:uri}, () => console.log("uriadjfasdf", this.state.uri));
        console.log("data que paso en navigation", data)
        this.props.navigation.navigate('VerFotos', data); 
      })
    })

    .catch(err => {
      console.log('Error recuperando documentos', err);
    });

  };

  reRender = () => {
    this.props.reRender();
}
  
  render(){
    return(
      <Root>
      <View style={styles.contenedor}>
        <View style={styles.contenedor}>
          <Text style={styles.detalleRetoTitulo}>{this.props.route.params.titulo}</Text>
          <Text style={styles.detalleRetoDetalle}>{this.props.route.params.detalle}</Text>
          {this.state.uri == null ? (
          <Image style={styles.imageBox} source={{uri:this.state.image}}/>) : 
          <Image style={styles.imageBox} source={{uri:this.state.uri}}/>}
        </View>
        <TouchableOpacity style={styles.menuInferior} onPress={() => this.props.navigation.navigate('NuevoReto')}>
          <Text style={styles.textoBoton}>NUEVO RETO</Text>
        </TouchableOpacity> 
            <TouchableOpacity style={styles.menuInferior} onPress={() => {hasAndroidPermission(); this.selectImages()}}>
              <Text style={styles.textoBoton}>NUEVO ICONO</Text>
            </TouchableOpacity> 
      </View>
      </Root>
    )
  }
}