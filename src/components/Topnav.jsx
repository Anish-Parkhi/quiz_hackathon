/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Topnav.module.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PropTypes from 'prop-types';

import { useState } from 'react';


function Topnav(props) {

    const[search,setSearch] = useState(' ')

  return (
    <>
        <div className={styles.main_div}>
        <div className={styles.searchBar}>
            <TextField
                className={styles.text_field}
                label="Search"
                variant='outlined'
                InputProps={{
                    endAdornment: (
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    )
                }}
                onChange={e => {
                    setSearch(e.target.value)
                }}
            />
        </div>

        <div className={styles.points_div}>
            <div className={styles.points_div_img}>
                <IconButton>
                    <CurrencyYenIcon/>
                </IconButton>
            </div>
            <div className={styles.points_div_content}>
                <p>
                    {
                        props.coins
                    }
                </p>
            </div>
        </div>

        <div className={styles.notification_div}>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
        </div>

        <div className={styles.profile_div}>
            <div className={styles.profile_div_userName}>
                <p>
                    {
                        props.userName
                    }
                </p>
            </div>
            <div className={styles.profile_div_icon}>
                <IconButton>
                    <PersonOutlineOutlinedIcon/>
                </IconButton>
            </div>
        </div>
        </div>
    </>
  )
}

Topnav.propTypes = {
    coins: PropTypes.number,
    userName: PropTypes.string
}

export default Topnav