
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const User = {
    username : 'abhsihek@domain.com',
    name : 'Abhishek',
    age: '25',
    country : 'India',
    designation: 'Software Engineer',
    accessToken: 'x21yaGMG5W'
};

//This would be performed on the server in a real app.


class LoginApi {

    static checkUserLogin(creds) {
        creds = Object.assign({}, creds);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                if (creds.username !== 'abhishek@domain.com' ) {
                    reject(`Username not found. Please contact system admin to add username into system.`);
                }

                if (creds.password !== 'test1234' ) {
                    reject(`Invalid Password. Please re-type your password (Check caps lock)`);
                }

                resolve(User);
            }, delay);
        });
    }

}

export default LoginApi;
