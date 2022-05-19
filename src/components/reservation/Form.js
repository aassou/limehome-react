import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DateRangePicker } from 'react-date-range';
import classNames from 'classnames';
import CountrySelector from '../CountrySelector';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { 
    validateEmail, 
    validatePhoneNumber, 
    validatePostalCode,
    validateGuestNumber
} from '../../utils/validation';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../../assets/style/reservation.scss';
import '../../assets/style/date-range.scss';

const Form = (props) => {
    const errorClassName = 'alert-danger';
    const errorMessage = 'This is a mandatory field!';

    // Success msg
    const [successMsg, setSuccessMsg] = useState('');

    // Fields
    const [checkin, setCheckin] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());
    const [guestNumber, setGuestNumber] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [billingCountry, setBillingCountry] = useState('United States');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [toggleDatePicker, setToggleDatePicker] = useState(false);

    // Error Classnames
    const [checkinErrorClassName, setCheckinErrorClassName] = useState('');
    const [checkoutErrorClassName, setCheckoutErrorClassName] = useState('');
    const [guestNumberErrorClassName, setGuestNumberErrorClassName] = useState('');
    const [firstnameErrorClassName, setFirstnameErrorClassName] = useState('');
    const [lastnameErrorClassName, setLastnameErrorClassName] = useState('');
    const [billingAddressErrorClassName, setBillingAddressErrorClassName] = useState('');
    const [billingCountryErrorClassName, setBillingCountryErrorClassName] = useState('');
    const [postalCodeErrorClassName, setPostalCodeErrorClassName] = useState('');
    const [cityErrorClassName, setCityErrorClassName] = useState('');
    const [emailErrorClassName, setEmailErrorClassName] = useState('');
    const [phoneErrorClassName, setPhoneErrorClassName] = useState('');

    // Error Messages
    const [checkinErrorMsg, setCheckinErrorMsg] = useState('');
    const [checkoutErrorMsg, setCheckoutErrorMsg] = useState('');
    const [guestNumberErrorMsg, setGuestNumberErrorMsg] = useState('');
    const [firstnameErrorMsg, setFirstnameErrorMsg] = useState('');
    const [lastnameErrorMsg, setLastnameErrorMsg] = useState('');
    const [billingAddressErrorMsg, setBillingAddressErrorMsg] = useState('');
    const [billingCountryErrorMsg, setBillingCountryErrorMsg] = useState('');
    const [postalCodeErrorMsg, setPostalCodeErrorMsg] = useState('');
    const [cityErrorMsg, setCityErrorMsg] = useState('');
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [phoneErrorMsg, setPhoneErrorMsg] = useState('');

    const ref = useDetectClickOutside({ onTriggered: () => setToggleDatePicker(false) })

    useEffect(() => {
        if (props.reservation) {
            const { reservation } = props;

            setCheckin(new Date(reservation.checkin));
            setCheckout(new Date(reservation.checkout));
            setGuestNumber(reservation.guestNumber);
            setFirstname(reservation.firstname);
            setLastname(reservation.lastname);
            setBillingAddress(reservation.billingAddress);
            setBillingCountry(reservation.billingCountry);
            setPostalCode(reservation.postalCode);
            setCity(reservation.city);
            setEmail(reservation.email);
            setPhone(reservation.phone);
        }
    }, [props.reservation]);

    const handlesubmit = async (e) => {
        e.preventDefault();

        // setSuccessMsg('');

        // setCheckinErrorMsg('');
        // setCheckinErrorClassName('');

        // setCheckoutErrorMsg('');
        // setCheckoutErrorClassName('');

        // setGuestNumberErrorMsg('');
        // setGuestNumberErrorClassName('');

        // setFirstnameErrorMsg('');
        // setFirstnameErrorClassName('');

        // setLastnameErrorMsg('');
        // setLastnameErrorClassName('');

        // setBillingAddressErrorMsg('');
        // setBillingAddressErrorClassName('');

        // setBillingCountryErrorMsg('');
        // setBillingCountryErrorClassName('');

        // setPostalCodeErrorMsg('');
        // setPostalCodeErrorClassName('');

        // setCityErrorMsg('');
        // setCityErrorClassName('');

        // setEmailErrorMsg('');
        // setEmailErrorClassName('');
        
        // setPhoneErrorMsg('');
        // setPhoneErrorClassName('');

        if (!checkin) {
            setCheckinErrorMsg(errorMessage);
            setCheckinErrorClassName(errorClassName);
        }
    
        if (!checkout) {
            setCheckoutErrorMsg(errorMessage);
            setCheckoutErrorClassName(errorClassName);
        }

        if (!validateGuestNumber(guestNumber)) {
            setGuestNumberErrorMsg(errorMessage);
            setGuestNumberErrorClassName(errorClassName);
        }

        if (!firstname) {
            setFirstnameErrorMsg(errorMessage);
            setFirstnameErrorClassName(errorClassName);
        }

        if (!lastname) {
            setLastnameErrorMsg(errorMessage);
            setLastnameErrorClassName(errorClassName);
        }

        if (!billingAddress) {
            setBillingAddressErrorMsg(errorMessage);
            setBillingAddressErrorClassName(errorClassName);
        }

        if (!billingCountry) {
            setBillingCountryErrorMsg(errorMessage);
            setBillingCountryErrorClassName(errorClassName);
        }

        if (!validatePostalCode(postalCode)) {
            setPostalCodeErrorMsg(errorMessage);
            setPostalCodeErrorClassName(errorClassName);
        }

        if (!city) {
            setCityErrorMsg(errorMessage);
            setCityErrorClassName(errorClassName);
        }

        if (!validateEmail(email)) {
            setEmailErrorMsg(errorMessage);
            setEmailErrorClassName(errorClassName);
        }
        
        if (!validatePhoneNumber(phone)) {
            setPhoneErrorMsg(errorMessage);
            setPhoneErrorClassName(errorClassName);
        }

        if (
            checkin,
            checkout,
            validateGuestNumber(guestNumber),
            firstname,
            lastname,
            billingAddress,
            billingCountry,
            validatePostalCode(postalCode),
            city,
            validateEmail(email),
            validatePhoneNumber(phone)
        ) {
            const id = props.reservation ? props.reservation.id : null;
            const reservation = {
                id,
                checkin,
                checkout,
                guestNumber: parseInt(guestNumber),
                firstname,
                lastname,
                billingAddress,
                billingCountry,
                postalCode,
                city,
                email,
                phone
            };

            const response = await props.ActionMethod(reservation);
            
            if (response) {
                setSuccessMsg('Your booking saved successfully!');
            }
        }
    };

    const showSuccess = (msg) => {
        if (msg) {
            return <p className="alert alert-success">{msg}</p>;
        }
    };

    const showError = (err) => {
        if (err) {
            return <p className="text-danger">{err}</p>;
        }
    };

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    };

    const handleSelectDateRange = (ranges) => {
        const startDate = ranges.selection.startDate;
        const endDate = ranges.selection.endDate;
        setCheckinErrorMsg('');
        setCheckinErrorClassName('');

        if (startDate < endDate) {
            setCheckin(ranges.selection.startDate);
            setCheckout(ranges.selection.endDate);
        } else {
            setCheckinErrorMsg('Check-out date should be greater than Check-in date!');
            setCheckinErrorClassName(errorClassName);
        }
        
        setToggleDatePicker(false)
        
    }

    return (
        <div className="bg-beige">
            <h1 className="text-center p-3">
                {props.formTitle}
            </h1>
            {showSuccess(successMsg)}
            <form onSubmit={handlesubmit} className="border border-lightblue">
                <div className="p-5">
                    {/* block 1 */}
                    <div className="grid-two">
                        <div className="mb-3 px-2">
                            <label className="form-label">
                                Check-in/out
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper flex">
                                <DateRangePicker
                                    ranges={[selectionRange]}
                                    onChange={handleSelectDateRange}
                                    className={classNames({'shown': toggleDatePicker}, {'hidden': !toggleDatePicker})}
                                />
                                <input
                                    ref={ref}
                                    onClick={() => setToggleDatePicker(true)}
                                    onSelectCapture={() => setToggleDatePicker(false)}
                                    value={`${checkin.toLocaleString('default', { month: 'long' })} ${checkin.getDate()} - ${checkout.toLocaleString('default', { month: 'long' })} ${checkout.getDate()}`}
                                    className={`form-control ${checkinErrorClassName}`}
                                    type="text"
                                    placeholder='May 27-29'
                                />
                            </div>
                            {showError(checkinErrorMsg)}
                            {showError(checkoutErrorMsg)}
                        </div>
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='guestNumber'>
                                Number of Guests 
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setGuestNumber(e.target.value); }}
                                    value={guestNumber}
                                    className={`form-control ${guestNumberErrorClassName}`}
                                    type="text"
                                    placeholder='2'
                                    id="guestNumber"
                                />
                            </div>
                            {showError(guestNumberErrorMsg)}
                        </div>
                    </div>
                    {/* block 2 */}
                    <div className="grid-two">
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='firstname'>
                                First Name 
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setFirstname(e.target.value); }}
                                    value={firstname}
                                    className={`form-control ${firstnameErrorClassName}`}
                                    type="text"
                                    placeholder='First Name'
                                    id='firstname'
                                />
                            </div>
                            {showError(firstnameErrorMsg)}
                        </div>
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='lastname'>
                                Last Name
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setLastname(e.target.value); }}
                                    value={lastname}
                                    className={`form-control ${lastnameErrorClassName}`}
                                    type="text"
                                    placeholder='Last Name'
                                    id='lastname'
                                />
                            </div>
                            {showError(lastnameErrorMsg)}
                        </div>
                    </div>
                    {/* block 3 */}
                    <div className="grid-two">
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='billingAddress'>
                                Billing Address 
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setBillingAddress(e.target.value); }}
                                    value={billingAddress}
                                    className={`form-control ${billingAddressErrorClassName}`}
                                    type="text"
                                    placeholder='Billing Address'
                                    id='billingAddress'
                                />
                            </div>
                            {showError(billingAddressErrorMsg)}
                        </div>
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='billingCountry'>
                                Billing Country
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <CountrySelector setBillingCountry={setBillingCountry} />
                                {/* <input
                                    onChange={(e) => { setBillingCountry(e.target.value); }}
                                    value={billingCountry}
                                    className={`form-control ${billingCountryErrorClassName}`}
                                    type="text"
                                    placeholder='Billing Country'
                                /> */}
                            </div>
                            {showError(billingCountryErrorMsg)}
                        </div>
                    </div>
                    {/* block 4 */}
                    <div className="grid-two">
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='postalCode'>
                                Postal Code
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setPostalCode(e.target.value); }}
                                    value={postalCode}
                                    className={`form-control ${postalCodeErrorClassName}`}
                                    type="text"
                                    placeholder='Postal Code'
                                    id='postalCode'
                                />
                            </div>
                            {showError(postalCodeErrorMsg)}
                        </div>
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='city'>
                                City
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setCity(e.target.value); }}
                                    value={city}
                                    className={`form-control ${cityErrorClassName}`}
                                    type="text"
                                    placeholder='City'
                                    id='city'
                                />
                            </div>
                            {showError(cityErrorMsg)}
                        </div>
                    </div>
                    {/* block 5 */}
                    <div className="grid-two">
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='email'>
                                Email <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setEmail(e.target.value); }}
                                    value={email}
                                    className={`form-control ${emailErrorClassName}`}
                                    type="text"
                                    placeholder='Youe email@domain.com'
                                    id='email'
                                />
                            </div>
                            {showError(emailErrorMsg)}
                        </div>
                        <div className="mb-3 px-2">
                            <label className="form-label" htmlFor='phoneNumber'>
                                Phone Number
                                <span className='text-danger'>*</span>
                            </label>
                            <div className="input-wrapper">
                                <input
                                    onChange={(e) => { setPhone(e.target.value); }}
                                    value={phone}
                                    className={`form-control ${phoneErrorClassName}`}
                                    type="text"
                                    placeholder='Your Phone Number'
                                    id='phoneNumber'
                                />
                            </div>
                            {showError(phoneErrorMsg)}
                        </div>
                    </div>
                </div>
                <div className="submit-wraper">
                    <div className='flex-1 px-5 py-2'>
                        <span className='text-danger'>*: Mandatory Fields</span>
                    </div>
                    <div className="px-5 py-2">
                        <Link to='/reservations' className='btn book blue text-white'>
                            Go Back
                        </Link>
                        <input 
                            className="btn book grey"
                            id='submit'
                            type="submit" 
                            value={`${props.ActionBtn}`} 
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
