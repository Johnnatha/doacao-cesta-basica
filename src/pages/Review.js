import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LogoCampanha from '../components/Image/logo-campanha';
import {TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Util from '../services/Util';

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
        textAlign: 'left',
        fontSize: '0.9rem'
    },

    termosText: {
        marginTop: theme.spacing(1),
        color: '#383838',
        fontWeight: 400,
        textAlign: 'justify',
        fontSize: '0.9rem',
        marginLeft: 20
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
        marginLeft: 20,
        fontWeight: 400,
        marginTop: 10,
        fontSize: '0.9rem',
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

export default function Review({donationValue,
                                   selectedCity,
                                   setEmail,
                                   setAllowUseName,
                                   settings,
                                   setAllowTermos,
                                   setAllowTermosFull}) {

    const classes = useStyles();
    const [allowUseName, setAllowUseNameLocal] = React.useState(false)
    const [email, setEmailLocal] = React.useState('')
    const [allowTermos, setAllowTermosLocal] = React.useState(false)
    const [allowTermosFull, setAllowTermosFullLocal] = React.useState(false)

    const handleChange = () => {
        setAllowUseNameLocal(!allowUseName)
        setAllowUseName(!allowUseName)
    }

    const handleChangeTermos = () => {
        setAllowTermosLocal(!allowTermos)
        setAllowTermos(!allowTermos)
    }

    const handleChangeTermosFull = () => {
        setAllowTermosFullLocal(!allowTermosFull)
        setAllowTermosFull(!allowTermosFull)
    }

    return (
        <React.Fragment>
            <Grid
                container
                className={classes.wrapper}
            >

                <Grid item xs={12}
                      justify="center"
                      alignItems="center">
                    <Typography variant="h6"
                                className={classes.typography}>
                        Doação no valor de<br />
                        <strong>R$ {Util.formatMoney(donationValue)}</strong> de cestas<br />
                        básicas para cidade de<br />
                        <strong>{selectedCity && selectedCity.nome ? selectedCity.nome : ''}
                            - {selectedCity && selectedCity.siglaUf ? selectedCity.siglaUf : ''} </strong>
                    </Typography>
                </Grid>

                <Grid item xs={12}
                      justify="center"
                      container
                      direction="column"
                      alignItems="center">
                    <div className={classes.imgWrapper}>
                        <LogoCampanha />
                    </div>
                </Grid>

                <Grid item xs={1}>
                    <Checkbox
                        checked={allowTermosFull}
                        onChange={handleChangeTermosFull}
                        name="allowTermosFull"
                        color="primary"
                        icon={<CheckBoxOutlineBlankIcon style={{fontSize: 25}}/>}
                        checkedIcon={<CheckBoxIcon style={{fontSize: 25}}/>}
                    />
                </Grid>

                <Grid item xs={11}>
                    <Typography variant="h6" className={classes.termosText}>
                        Declaro que, em razão do estado de calamidade pública causada pela pandemia do COVID 19
                        a presente doação de cestas básicas está sendo feita de forma virtual. A finalidade
                        desta doação é auxiliar a população de baixa renda que está necessitando de alimentação.
                        Por essa razão, autorizo as Lojas Quero-Quero a adquirir, por minha conta e ordem, as
                        referidas cestas básicas, para, em meu nome, e também por minha conta e ordem,
                        entrega-las às entidades beneficentes ou diretamente à Administração Pública municipal.
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <Checkbox
                        checked={allowTermos}
                        onChange={handleChangeTermos}
                        name="allowTermos"
                        color="primary"
                        icon={<CheckBoxOutlineBlankIcon style={{fontSize: 25}}/>}
                        checkedIcon={<CheckBoxIcon style={{fontSize: 25}}/>}
                    />
                </Grid>

                <Grid item xs={11}>
                    <Typography variant="h6" className={classes.termosText}>
                        Declaro que estou de acordo com os termos de doação acima.
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <Checkbox
                        checked={allowUseName}
                        onChange={handleChange}
                        name="allowUseName"
                        color="primary"
                        icon={<CheckBoxOutlineBlankIcon style={{fontSize: 25}}/>}
                        checkedIcon={<CheckBoxIcon style={{fontSize: 25}}/>}
                    />
                </Grid>

                <Grid item xs={11}>
                    <Typography variant="h6" className={classes.termosText}>
                        Autorizo a divulgação do meu nome como Doador.
                    </Typography>
                </Grid>

                <Grid item xs={1}>

                </Grid>

                <Grid item xs={11}>
                    <Typography variant="h6" className={classes.termosText}>
                        <strong>
                        Informe seu e-mail e receba e informações sobre a campanha.
                        </strong>
                    </Typography>
                </Grid>

                <Grid item xs={1}>

                </Grid>

                <Grid item xs={11}>
                    <TextField
                        value={email}
                        onChange={event => {
                            setEmailLocal(event.target.value);
                            if (setEmail) {
                                setEmail(event.target.value)
                            }
                        }}
                        fullWidth
                        type="email"
                        placeholder="Informe seu E-mail"
                        className={classes.emailField}
                        required={settings && settings.requiredEmailAutorizacao}
                    />
                </Grid>
            </Grid>

        </React.Fragment>
    );
}