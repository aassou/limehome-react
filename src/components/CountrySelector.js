import { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

function CountrySelector({setBillingCountry}) {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
      setBillingCountry(value.label)
    }
  
    return <Select
                className='country'
                options={options} 
                value={value} 
                onChange={changeHandler} 
            />
  }
  
  export default CountrySelector