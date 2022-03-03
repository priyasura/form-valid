import React, { useState, useEffect } from "react";
import styles from '../styles/Home.module.css';
import { useForm } from 'react-hook-form';
import * as EmailValidator from 'email-validator';
export default function Validate() {
    const [mail, setMail] = useState(false)
    const [ButtonDisabled, setButtonDisabled] = useState(true)
    // useEffect(()=>{
    //     if(Y||N)
    //     {
    //         const x=false;
    //         setButtonDisabled(x);
    //     }
    //     else{
    //         const x=true;
    //         setButtonDisabled(x);
    //     }
    // })

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [Y, setY] = useState(false)
    const [N, setN] = useState(false)
    const handleClickY = () => {
        if (Y) {
            N = true
            Y = false
            setY(Y)
            setN(N)
        }
        else {
            Y = true
            N = false
            setY(Y)
            setN(N)
        }
    }
    const handleClickN = () => {
        if (N) {
            Y = true
            N = false
            setY(Y)
            setN(N)
        }
        else {
            N = true
            Y = false
            setY(Y)
            setN(N)
        }
    }
    const myfun = () => {
        // if()
        // if(EmailValidator.validate(mail)) {
            alert("sucesssfully")
            console.log("....",EmailValidator.validate("test@gma.com"))
        // }
        // else{
            alert("please check mail!!");
        // }
    
    }
    useEffect(() => {
        if (Y || N ) {
            const x = false;
            setButtonDisabled(x);
        }
        else {
            const x = true;
            setButtonDisabled(x);
        }
    })
    const mailhandler = (e) => {
        console.log("name is", e.target.value);
        setMail(e.target.value);
    }
    return (
        <div className='row'>
            <div className={styles.card}>
                <div className="card-body">
                    <h3 style={{ textAlign: 'center' }}>Join 1000 people who took <br></br>the free introduction in the last week</h3>
                    <form onSubmit={handleSubmit(myfun)} style={{ textAlign: 'center' }}>
                        <div className="form-group">
                            <label htmlFor="fullname" style={{ marginLeft: '-60%' }}>Name*</label><br></br>
                            <input text="text" style={{ width: '70%', padding: '10px', borderRadius: '5px' }} {...register('name', { required: true, minLength: 6 })} />
                            {errors.name && errors.name.type == "required" && <p style={{ color: "red" }}>please enter the fullname</p>}
                            {errors.name && errors.name.type == "minLength" && <p style={{ color: "orange" }}>Please enter name with minLength 6</p>}

                        </div>

                        <div className="form-group" style={{ paddingTop: '3%' }}>
                            <label htmlFor="email" style={{ marginLeft: '-60%' }}>email*</label><br></br>
                            <input type="email" autoComplete="email" required onChange={(value) => mailhandler(value)} style={{ width: '70%', padding: '10px', borderRadius: '5px' }} /><br></br>
                            {/* <input type="email" name="email" required style={{ width: '70%', padding: '10px', borderRadius: '5px' }}></input> */}
                        </div>
                        <div className="form-group" style={{ paddingTop: '3%' }}>
                            <label htmlFor="phonenumber" style={{ marginLeft: '-48%' }}>phonenumber*</label><br></br>
                            <input type="text" name="phonenumber" pattern="[0-9]*" minLength="10" maxLength="10" required style={{ width: '70%', padding: '10px', borderRadius: '5px' }} />
                        </div>
                        <div style={{ paddingTop: '3%' }}>
                            <label style={{ marginLeft: '-55%' }}>select day</label><br></br>
                            <select style={{ width: '70%', padding: '10px', borderRadius: '5px' }}>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thrusday">Thrusday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                            </select>
                        </div>
                        <div style={{ paddingTop: '3%' }}>
                            <label style={{ marginLeft: '-54%', paddingTop: '3%' }}>select time*</label><br></br>
                            <select style={{ width: '70%', padding: '10px', borderRadius: '5px' }} required>
                                <option value="5pm">5pm</option>
                                <option value="7pm">7pm</option>
                                <option value="9pm">9pm</option>
                            </select>
                        </div>
                        <div style={{ marginLeft: '-8%', paddingTop: '3%' }}>
                            <label required>
                                Have you learnt Sudarshan Kriya *
                            </label>

                            {/* <input type="radio" id="yes" name="option" value="yes" /><label>Yes</label>

                            <input type="radio" id="no" name="option" value="no" /><label>No</label> */}

                            <input type="radio" name="yes" value="yes" checked={Y} onClick={() => handleClickY()} />Yes
                            <input type="radio" name="no" value="no" checked={N} onClick={() => handleClickN()} />No
                        </div>
                        <br />
                        <div>
                            <button type="submit" disabled={ButtonDisabled} className={styles.buttonstyle}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}