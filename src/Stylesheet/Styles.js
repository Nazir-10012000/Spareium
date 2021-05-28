import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = (Dimensions.get('window').width) / 375;
const HEIGHT = (Dimensions.get('window').height) / 812;

const Styles = StyleSheet.create({

    body: {

    },
    Image: {
        flex: 1,
    },
    logo: {
        height: HEIGHT * 232,
        width: WIDTH * 256,
        marginTop: HEIGHT * 18,
        resizeMode: 'contain'
    },
    text: {
        marginTop: HEIGHT * 43,
        marginLeft: WIDTH * 121,
        fontSize: HEIGHT * 15,
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: 'bold',
        letterSpacing: 0.42,
    },
    signinApple: {
        marginTop: HEIGHT * 116,
    },
    loginWith: {
        flex: 1,
        flexDirection: 'row',
        marginTop: HEIGHT * 42,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    icons: {
        height: HEIGHT * 60,
        width: WIDTH * 60,
        resizeMode: 'contain',
    },
    back: {
        marginLeft: WIDTH * 31,
        marginTop: HEIGHT * 52,
        height: HEIGHT * 23,
    },
    input: {

        borderColor: 'rgb(255,255,255)',
        borderWidth: 1,
        borderRadius: HEIGHT * 15,
        height: HEIGHT * 52,
        width: WIDTH * 315,
        marginVertical: HEIGHT * 16.5,
        paddingHorizontal: WIDTH * 20,

    },
    inputPhone: {
        borderColor: 'rgb(255,255,255)',
        borderWidth: 1,
        borderRadius: HEIGHT * 15,
        height: HEIGHT * 60,
        width: WIDTH * 315,
    },
    otpBox: {
        borderColor: 'rgb(255,255,255)',
        borderWidth: 1,
        borderRadius: HEIGHT * 10,
        height: HEIGHT * 53,
        width: WIDTH * 60,
        fontSize: 23,
        color: 'rgb(255,255,255)',
        paddingHorizontal: 22.5,

    },
    cards: {
        flexDirection: 'column',
        width: WIDTH * 275,
    },
    cardMenu: {

        marginTop: HEIGHT * 18,
        flexDirection: 'column',
    },
    cardName: {
        fontSize: HEIGHT * 17,
        letterSpacing: WIDTH * 0.47,
        color: 'rgb(87,87,87)',
        fontWeight: 'bold',
        marginLeft: 80,
        width: WIDTH * 87,
        transform: [{ rotate: '270deg' }]

    },
    card: {
        height: HEIGHT * 180,
        width: WIDTH * 285,
        marginLeft: WIDTH * (-85),
        resizeMode:"contain"

    },
    cardData: {
        fontSize: HEIGHT * 15,
        letterSpacing: WIDTH * 1,
        fontWeight: 'bold',
        color: 'white',
    },
    user: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: WIDTH * 82,
        alignSelf:'center',
        height: WIDTH * 92,
        width: WIDTH * 92,
        resizeMode: 'contain'
    },
    title: {
        fontSize: HEIGHT * 17,
        lineHeight: HEIGHT * 24,
        letterSpacing: WIDTH * 0.47,
        color: 'rgb(255,255,255)',
        alignSelf: 'center',
        marginTop: HEIGHT * 7,
    },
    bell: {
        height: HEIGHT * 30,
        width: WIDTH * 24,
        marginLeft: WIDTH * 216,
        marginTop: HEIGHT * 14,
    },
    DrawerItem: {
        color: 'rgb(255,255,255)',
        fontSize: HEIGHT * 17,
        marginLeft: WIDTH * -12,
        letterSpacing: WIDTH * 0.47,
        fontWeight: '500'
    },
    leads: {
        padding: WIDTH * 25,
        borderBottomWidth: 1,
        borderColor: 'rgb(230,230,230)',
        flexDirection: 'row'
    },
    leadDetail: {
        marginTop: HEIGHT * 9,
        marginHorizontal: WIDTH * 20,
        backgroundColor: 'rgb(255,255,255)',
        borderBottomLeftRadius: HEIGHT * 30,
        borderBottomRightRadius: HEIGHT * 30,
        // shadowColor:'rgba(0,255,5,0.2)',
        // shadowOffset:{height: 30,width:0},
        // shadowRadius:10
    },
    connects: {
        fontSize: HEIGHT * 17,
        color: 'rgb(0,0,0)',
        letterSpacing: WIDTH * 0.89,
        lineHeight: HEIGHT * 24,
        width: WIDTH * 256,
        fontWeight: '600'
    },
    orders: {
        fontSize: HEIGHT * 13,
        letterSpacing: WIDTH * 0.68,
        lineHeight: HEIGHT * 19,
    },
    carTable: {
        borderWidth: 1,
        borderRadius: HEIGHT * 16,
        borderColor: 'rgb(227,227,227)',
        marginTop: HEIGHT * 23,
        marginHorizontal: WIDTH * 15,
        paddingHorizontal: WIDTH * 18,

    },
    wrapper: {

        // marginTop:HEIGHT*23,
        backgroundColor: 'white'

    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: WIDTH * 110,
        marginVertical: HEIGHT * 14
    },
    txt: {
        letterSpacing: WIDTH * 0.2,
        fontSize: HEIGHT * 13,
        lineHeight: HEIGHT * 17,
        color: 'rgb(0,0,0)',
        marginTop: HEIGHT * 14
    },
    searchBtn: {
        backgroundColor: 'rgb(1,54,176)',
        borderRadius: HEIGHT * 30,
        height: HEIGHT * 60,
        width: WIDTH * 345,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: HEIGHT * 5,
        marginHorizontal: WIDTH * 14,
    },
    oem: {
        flexDirection: 'row',
        borderRadius: HEIGHT * 16,
        borderWidth: 1,
        height: HEIGHT * 60,
        width: WIDTH * 335,
        marginHorizontal: WIDTH * 20,
        borderColor: 'rgb(151,151,151)',
        marginTop: HEIGHT * 161,
        justifyContent: 'space-between',
        paddingHorizontal: WIDTH * 20,
        paddingVertical: HEIGHT * 0

    },
    Data: {
        height: HEIGHT * 288,
        width: WIDTH * 345,
        marginHorizontal: WIDTH * 20,
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    foundData: {
        height: HEIGHT * 205,
        width: WIDTH * 335,
        marginVertical: HEIGHT * 20,
        marginHorizontal: WIDTH * 20,
        paddingVertical: HEIGHT * 22,
        paddingHorizontal: WIDTH * 19,

    },
    cardTitle: {
        fontSize: HEIGHT * 19,
        lineHeight: HEIGHT * 25,
        letterSpacing: WIDTH * 0.45,
        fontWeight: '600',

    },
    cardView: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',

    },
    manualTitle: {
        fontSize: HEIGHT * 17,
        letterSpacing: WIDTH * 0.53,
        lineHeight: HEIGHT * 24,
        color: 'rgba(0,0,0,0.80)',
        fontWeight: '700'
    },
    manualImgView: {
        backgroundColor: 'rgb(241,241,241)',
        width: WIDTH * 80,
        borderTopLeftRadius: HEIGHT * 7,
        borderBottomLeftRadius: HEIGHT * 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AgencyFinder: {
        marginVertical: HEIGHT * 20,
        height: HEIGHT * 50,
        marginHorizontal: WIDTH * 20,
        paddingHorizontal: WIDTH * 20,
        // paddingVertical: HEIGHT * 12,
        flexDirection: 'row',
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 50,
        alignItems:'center'

    },
    AgenciesView: {
        backgroundColor: 'rgb(241,246,255)',
        // height:HEIGHT*812,
        // width:WIDTH*375,
        flex: 1,
        // paddingHorizontal:WIDTH*20,

    },
    car: {
        height: HEIGHT * 192,
        resizeMode: 'stretch',
        width: WIDTH * 335,
        flex: 1,
        borderTopLeftRadius: HEIGHT * 15,
        borderTopRightRadius: HEIGHT * 15,
    },
    callNow: {
        fontSize: HEIGHT * 13,
        color: 'rgb(10,20,155)',
        letterSpacing: WIDTH * 0.36,
        fontWeight: '700',
        lineHeight: HEIGHT * 19,
    },
    map: {

        height: HEIGHT * 578,
    },
    userImgStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: HEIGHT * 1.5,
        borderColor: 'rgb(211,208,212)',
    },
    sendMsgView: {
        height: HEIGHT * 112,
        width: "100%",
        paddingHorizontal: WIDTH * 20,
        // backgroundColor:'green',
        paddingVertical: HEIGHT * 20,
        borderColor:'rgba(0,0,0,0.07)',
        borderTopWidth:5,
        alignSelf:'flex-end'
    },
    sentmsgView:{
        backgroundColor:'rgb(0,85,197)',
        // width:WIDTH*280,
        flexDirection:'column',
        borderRadius:HEIGHT*13,
        paddingHorizontal:WIDTH*20,
        paddingVertical:HEIGHT*15,
        marginVertical:3,
        alignSelf:'flex-end',
        maxWidth:WIDTH*280,

    },
    sentmsgText:{
        fontSize:HEIGHT* 14,
        color:'white',
        letterSpacing:WIDTH*0.41,
        fontWeight:'500',

    },
    recievedMsgView:{
        backgroundColor:'rgb(242,242,242)',
        // width:WIDTH*280,
        flexDirection:'column',
        borderRadius:HEIGHT*13,
        paddingHorizontal:WIDTH*20,
        paddingVertical:HEIGHT*15,
        marginVertical:3,
        alignSelf:'flex-start',
        maxWidth:WIDTH*280,

    },
    recievedMsgText:{
        fontSize:HEIGHT* 14,
        color:'rgb(74,74,74)',
        letterSpacing:WIDTH*0.41,
        fontWeight:'500',
        textAlign:'right'

    },
    settingsbody:{
        backgroundColor:'rgb(241,246,255)',
        flex:1,
    },
    header:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingTop:HEIGHT*55,
        paddingBottom:HEIGHT*12,
    },
    settings:{
        fontSize:HEIGHT*19,
        // lineHeight:HEIGHT*27,
        color:'rgb(74,74,74)',
        letterSpacing:WIDTH*1,
        // alignSelf:'center',
        fontWeight:'700',
        marginLeft:WIDTH*99
        
    },
    cp:{
        fontSize:HEIGHT*19,
        // lineHeight:HEIGHT*27,
        color:'rgb(74,74,74)',
        letterSpacing:WIDTH*1,
        // alignSelf:'center',
        fontWeight:'700',
        marginLeft:WIDTH*90
        
    },
    displayName:{
        fontSize:HEIGHT*21,
        letterSpacing:WIDTH*0.58,
        color:'rgb(74,74,74)',
        lineHeight:HEIGHT*29,
        fontWeight:'600'
    },
    city:{
        fontSize:HEIGHT*17,
        lineHeight:HEIGHT*24,
        letterSpacing:WIDTH* 0.47,
        color:'rgb(0,115,216)',
        fontWeight:'600',
        marginLeft:WIDTH*9
    },
    fieldName:{
        fontSize:HEIGHT*14,
        lineHeight:HEIGHT*19,
        letterSpacing:WIDTH*0.36,
        color:'rgb(74,74,74)',
        fontWeight:'600',
        marginTop:HEIGHT*26,
    },
    field:{
        backgroundColor:'white',
        paddingHorizontal:WIDTH*20,
        justifyContent:'center',
        color:'rgb(74,74,74)',
        fontSize:HEIGHT*17,
        letterSpacing:WIDTH*0.47,
        fontWeight:'600',
        height:HEIGHT*50,
        borderRadius:HEIGHT*12,
        shadowOpacity:.10,
      shadowRadius:10,
    //   shadowColor:'rgb(0,0,0)',
      shadowOffset:{
        width: 1,
        height: 1},
        marginTop:HEIGHT*5
    }
}
)
export default Styles;
