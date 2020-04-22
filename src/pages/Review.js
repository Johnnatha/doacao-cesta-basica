import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LogoCampanha from '../components/Image/logo-campanha';
import {TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Util from '../services/Util';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    typography: {
        marginTop: theme.spacing(1),
        color: '#383838',
        fontWeight: 400,
        textAlign: 'center',
        fontSize: '1.5em'
    },
    smallTypography: {
        marginTop: theme.spacing(1),
        color: '#383838',
        fontWeight: 400,
        textAlign: 'center',
        fontSize: '1.2em'
    },


    title: {
        marginTop: theme.spacing(3),
        color: '#383838',
        fontWeight: 400,
        textAlign: 'center',
        fontSize: '1.2em'
    },
    imgWrapper: {},
    spacerTop: {
        marginTop: 10,
        width: '100%'
    },
    wrapper: {},
    emailField: {
        '& input': {
            textAlign: 'center'
        }
    },
    '@media only screen and (max-width: 992px)': {
        hidenMobile: {
            display: 'none'
        },
    }
}));

export default function Review({donationValue, selectedCity, setEmail, setAllowUseName, settings}) {
    const classes = useStyles();
    const [allowUseName, setAllowUseNameLocal] = React.useState(false)
    const [email, setEmailLocal] = React.useState('')
    const [emailFocus, setEmailFocus] = React.useState(false)

    const handleChange = () => {
        setAllowUseNameLocal(!allowUseName)
        setAllowUseName(!allowUseName)
    }

    const handleEmailFocus = () => {
        setEmailFocus(true)
    }

    const handleEmailBlur = () => {
        setEmailFocus(false)
    }

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.wrapper}
            >

                <Typography variant="h6"
                            classNames={classes.typography}>
                    Doação no valor de<br />
                    <strong>R$ {Util.formatMoney(donationValue)}</strong> de cestas<br />
                    básicas para cidade de<br />
                    <strong>{selectedCity && selectedCity.nome ? selectedCity.nome : ''}
                        - {selectedCity && selectedCity.siglaUf ? selectedCity.siglaUf : ''} </strong>
                </Typography>

                <div className={classes.imgWrapper}>
                    <LogoCampanha />
                </div>

                <Typography variant="h6" className={classes.smallTypography}>
                    Informe seu e-mail e receba<br />
                    informações sobre a campanha
                </Typography>

                <div className={classes.spacerTop}>
                    <TextField
                        value={email}
                        onChange={event => {
                            setEmailLocal(event.target.value);
                            if (setEmail) {
                                setEmail(event.target.value)
                            }
                        }}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailBlur}
                        fullWidth
                        type="email"
                        placeholder="E-mail"
                        className={classes.emailField}
                        required={settings && settings.requiredEmailAutorizacao}
                    />
                </div>

                <div className={classes.spacerTop}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={allowUseName}
                                onChange={handleChange}
                                name="allowUseName"
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon style={{fontSize: 32}}/>}
                                checkedIcon={<CheckBoxIcon style={{fontSize: 32}}/>}
                            />
                        }
                        label="Autorizo a divulgação do meu nome como Doador"
                    />
                </div>
            </Grid>

        </React.Fragment>
    );
}