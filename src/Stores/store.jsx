import {
    observable, decorate, action
} from 'mobx';
import SampleData from './SampleData'
import Features from './Features'


class Store {
    pageCount = 0;
    ExtractedData = [];
    ModelData = {
        ModuleName : '',
        ModuleAlgo : '',
        allfeatures : [],
        selectedfeatures : [],
        targetedfeatures : [],
    };
    Features = Features;

    // Login Object
    Login = {
        Email: '',
        Password: '',
    }

    //  Registration Object
    Registration = {
        Email: '',
        Password: '',
        ConfirmPassword: '',
        FirstName: '',
        LastName: ''
    }

    // Login Credentials check
    LoginCheck() {
        const email = "admin";
        const password = 'admin';
        if (this.Login.Email === email) {
            if (this.Login.Password === password) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }

    // Registration Proceedings
    RegistrationCheck() {
        return true
    }

    // The data extracted from CSV file goes here
    getExtractedData() {
        this.ExtractedData = SampleData;
    }

    // 
    FeaturesAction() {
       this.Features.map((data , index) => {
        return this.ModelData[`${data.category}features`].push(data)
       })
    }
}

decorate(Store, {
    Login: observable,
    LoginCheck: action.bound,
    Registration: observable,
    RegistrationCheck: action.bound,
    ExtractedData: observable,
    pageCount: observable,
    ModelData:observable,
    Features : observable,
    FeaturesAction:action.bound,
});

const store = new Store();

export default store;