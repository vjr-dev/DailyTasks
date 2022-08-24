import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//import AntIcon from 'react-native-vector-icons/AntDesign'
export default class LoginScreen extends React.Component {
  state = {
    disabled: true,
    email: '',
    emailIsValid: null,
    password: '',
    passwordIsValid: null,
    passwordError: '',
    emailError: '',
  };

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  onEmailBlur() {
    const errorText = 'please enter your email';
    const valFalse = false;
    const valTrue = true;
    const email = this.state.email
    if (this.state.email.length === 0) {
      return this.setState({emailError: errorText, emailIsValid: valFalse});
    }  else if(!this.isValidEmail(email) ) {
           
      return this.setState({emailError:"enter valid email address", emailIsValid: valFalse})
  }
     else {
      return this.setState({emailError: '', emailIsValid: valTrue});
    }
  }

  // onEmailChange(text) {
  //     const errorText = "please enter your email";
  //     const  valFalse= false;
  //     const valTrue = true;

  //     if(this.state.email.length === 0 ) {

  //         return  this.setState({emailError: errorText,emailIsValid: valFalse})
  //     }
  //     else {
  //         return  this.setState({emailError:"",emailIsValid: valTrue})

  //     }
  // }



  onPasswordBlur() {
    const errorText = 'please enter your password';
    const valFalse = false;
    const valTrue = true;
    if (this.state.password.length === 0) {
      return this.setState({
        passwordError: errorText,
        passwordIsValid: valFalse,
      });
    } else if(this.state.email.length >0 && this.state.password.length >0 ) {
      return this.setState({
        passwordError: '',
        passwordIsValid: valTrue,
        disabled: valFalse,
      });
    }
  }


  handleSubmit() {
    const {email, password} = this.state
    const setData = {
    
        "email": email,
        "password": password
    }
    console.log("state value", this.state)
    fetch("http://restapi.adequateshop.com/api/authaccount/login", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(setData)
})
.then((res) => res.json())
.then((result) => {
    console.log("result>>", result)
    if(result?.data){
        this.props.navigation.navigate("Dashboard")

    } else if(result?.data == null) {
      alert(result?.message)

  }
})
.catch(error => console.log("catched error", error))
}


  render() {
   // console.log('this.props>>', this.state.emailIsValid);
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} bounces="flase">
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>Welcome Back</Text>
                <Text style={styles.SubHeaderTxt}>
                  Hello there, Sign In to continue!
                </Text>
              </View>

              {/* <Form/> */}
              <View style={styles.formContainer}>
                <View>
                  <Text style={styles.inputTagName}>Username or email</Text>
                  <View style={styles.txtInputContainer}>
                    <TextInput
                      style={styles.emailField}
                      placeholder="Enter your username or email"
                      onBlur={() => this.onEmailBlur()}
                      onChangeText={text => this.setState({email: text})}
                    />

                    {this.state.emailIsValid === null ? (
                      <Image style={{width: 20, height: 20, marginRight: 20}} />
                    ) : this.state.emailIsValid ? (
                      <Image
                        style={{width: 20, height: 20, marginRight: 20}}
                        source={require('../../../assets/check.png')}
                      />
                    ) : (
                      <Image
                        style={{width: 20, height: 20, marginRight: 20}}
                        source={require('../../../assets/cross.png')}
                      />
                    )}
                  </View>
                  <Text style={styles.errorMessage}>
                    {this.state.emailError}
                  </Text>
                </View>
                <View>
                  <Text style={styles.inputTagName}>Password</Text>
                  <View style={styles.txtInputContainer}>
                    <TextInput
                      style={styles.emailField}
                      placeholder="Enter your password"
                      onBlur={() => this.onPasswordBlur()}
                      onChangeText={text => this.setState({password: text})}
                      secureTextEntry={true}
                    />

                    {this.state.passwordIsValid === null ? (
                      <Image style={{width: 20, height: 20, marginRight: 20}} />
                    ) : this.state.passwordIsValid ? (
                      <Image
                        style={{width: 20, height: 20, marginRight: 20}}
                        source={require('../../../assets/check.png')}
                      />
                    ) : (
                      <Image
                        style={{width: 20, height: 20, marginRight: 20}}
                        source={require('../../../assets/cross.png')}
                      />
                    )}
                  </View>
                  <Text style={styles.errorMessage}>
                    {this.state.passwordError}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity disabled={this.state.disabled} onPress={() => this.handleSubmit()}>
                    <View
                      style={[
                        styles.btnView,
                        {opacity: this.state.disabled ? 0.5 : 1},
                      ]}>
                      <Text style={styles.btnTxt}>Login</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.footerContainer}>
                <Text style={styles.footerTxt}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.footerTxtSignUp}>Sign Up </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.upperSection}>
              <TouchableOpacity >
                <View style={styles.imgBackButton}>
                  <Image
                    source={require('../../../assets/backXL.png')}
                    style={styles.img}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.txtContainer}>
                <Text style={styles.signIn}>Sign In</Text>
                {/* <AntIcon name={"rightcircle"} size={30} color={"white"}/> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F52BA',
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },

  innerContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  img: {
    width: 30,
    height: 30,
  },
  signIn: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  upperSection: {
    marginTop: 20,
    paddingLeft: 20,
  },
  txtContainer: {
    marginTop: 40,
  },
  headerTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  headerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  footerTxtSignUp: {
    color: '#0F52BA',
    fontWeight: 'bold',
  },
  emailField: {
    borderRadius: 40,
    paddingLeft: 20,
  },
  txtInputContainer: {
    backgroundColor: '#F4F9F9',
    borderRadius: 40,
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formContainer: {
    //marginLeft: 30,
    marginHorizontal: 25,
  },
  inputTagName: {
    marginLeft: 10,
  },
  errorMessage: {
    color: 'red',
    marginLeft: 30,
    marginBottom: 20,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnView: {
    backgroundColor: '#0F52BA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
