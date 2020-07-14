import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import _uniqueId from 'lodash/uniqueId';
import useTranslation from 'next-translate/useTranslation';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import MenuSubSection from '../components/MenuSubSection';
import MenuArticle from '../components/MenuArticle';
import ArrowBack from '@material-ui/icons/ArrowBack';

const pitcherWines = [
  {
    'name': 'Chianti DOC',
    'prices': [3.8, 7.5, 14, 0]
  },
  {
    'name': 'Lambrusco Amabile DOC',
    'prices': [3.1, 6, 11, 0]
  },
  {
    'name': 'Rosé d\'été',
    'prices': [3.6, 6.9, 13, 18]
  },
  {
    'name': 'Sélection du chef',
    'prices': [4.4, 8.2, 16, 24]
  }
];

const alsacianWines = [
  {
    'name': 'Edelzwicker Gross',
    'prices': [2.5, 4.5, 8, 0]
  },
  {
    'name': 'Pinot Noir Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Pinot Gris Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Riesling Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Muscat Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Gewurtztraminer Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
];

const Menu = () => {
  const { t, lang } = useTranslation();
  const classes = useStylesMenu();

  return (
    <>
      <Head>
        <title>{t('common:menu')} - {t('common:restaurant')}</title>
      </Head>
      <Header lang={lang.toString()} />
      <Body>
        <TopSpace />
        <Logo src="/orabbits-logo.png" alt="restaurant logo" />
        <Title>
          O&apos;rabbit&apos;s
          <br />
          IRISH PUB
        </Title>
        <MenuTitle>{t('common:menu')}</MenuTitle>
        <ExpansionPanel style={{ width: '90%', margin: '16px 5%' }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{t('menu:dessert')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:tiramisu')} price={6.8} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ width: '90%', margin: '16px 5%' }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{t('menu:pizza')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4formaggi')} ing={t('menu:4formaggi-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:pizza-steak')} ing={t('menu:pizza-steak-ing')} price={15} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:diavola')} ing={t('menu:diavola-ing')} price={12.8} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:siciliana')} ing={t('menu:siciliana-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:mamma-giovanna')} ing={t('menu:mamma-giovanna-ing')} price={13.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:hawaiana')} ing={t('menu:hawaiana-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:fiorentina')} ing={t('menu:fiorentina-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:capriciosa')} ing={t('menu:capriciosa-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:margherita')} ing={t('menu:margherita-ing')} price={10.7} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4stagioni')} ing={t('menu:4stagioni-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:bufala')} ing={t('menu:bufala-ing')} price={13.8} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:napoletana')} ing={t('menu:napoletana-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:vegetariana')} ing={t('menu:vegetariana-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:1000gusti')} ing={t('menu:1000gusti-ing')} price={12.8} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:parmigiana')} ing={t('menu:parmigiana-ing')} price={12.8} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:calzone')} ing={t('menu:calzone-ing')} price={12.8} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ width: '90%', margin: '16px 5%' }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{t('menu:white-pizza')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:burratina')} ing={t('menu:burratina-ing')} price={15.9} />
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:chicken')} ing={t('menu:chicken-ing')} price={12.8} />
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:white-bufala')} ing={t('menu:white-bufala-ing')} price={13.5} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ width: '90%', margin: '16px 5%' }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{t('menu:italian-wine')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ display: 'block' }}>
            <MenuSubSection title={t('menu:red-wine')} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Lambrusco Quercioli DOC Medici'} capacity="75cl" price={15.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Primitivo Quota 29 IGT Menhir'} capacity="75cl" price={29.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Nero d\'Avola Sicilia IGT Mabis'} capacity="75cl" price={21} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Illivia Salento IGT L. de Castris'} capacity="75cl" price={26.5} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Valpolicella DOC D. V. Negrar'} capacity="37,5cl" price={13.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Valpolicella DOC D. V. Negrar'} capacity="75cl" price={21} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Barolo DOCG Beni di Batasiolo'} capacity="75cl" price={48} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Chianti Vernaiolo DOCG R. Macie'} capacity="75cl" price={21} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Montepulciano DOC C. Thaulero'} capacity="75cl" price={24.9} />
            <MenuSubSection title={t('menu:white-wine')} />
            <MenuArticle key={(_uniqueId('white-wine-'))} name={'Gavi del Piemonte DOC Batasiolo'} capacity="75cl" price={26} />
            <MenuSubSection title={t('menu:rose-wine')} />
            <MenuArticle key={(_uniqueId('rose-wine-'))} name={'Bardolino Chiar. DOC D. V. Negrar'} capacity="37,5cl" price={13.5} />
            <MenuArticle key={(_uniqueId('rose-wine-'))} name={'Bardolino Chiar. DOC D. V. Negrar'} capacity="75cl" price={21} />
            <MenuSubSection title={t('menu:pitcher-wine')} />
            <PitcherWine wines={pitcherWines} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{ width: '90%', margin: '16px 5%' }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{t('menu:french-wine')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ display: 'block' }}>
            <MenuSubSection title={t('menu:selection-wine')} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Bordeaux Saint-Emilion AOC'} capacity="37,5cl" price={16.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Bordeaux Saint-Emilion AOC'} capacity="75cl" price={29.9} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Brouilly Briante AOC'} capacity="37,5cl" price={15.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Brouilly Briante AOC'} capacity="75cl" price={25.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Vacqueyras AOC'} capacity="75cl" price={25} />
            <MenuSubSection title={t('menu:alsacian-wine')} />
            <PitcherWine wines={alsacianWines} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Body>
      <Footer />
    </>
  );
};

const useStylesMenu = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Logo = styled.img`
  width: 300px;
  margin-left: calc(50% - 150px);
  margin-top: 30px;
  @media (max-width: 500px) {
    margin-left: calc(50% - 60px);
    width: 120px;
  }
`;

const TopSpace = styled.div`
  margin-top: 64px;
  width: 100%;
  @media (max-width: 500px) {
    margin-top: 180px;
  }
`;

const Title = styled.div`
  margin: 40px 10px 20px 10px;
  padding: 20px;
  color: #3D3D3D;
  font-size: 3em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 2em;
  }
  @media (max-width: 1024px) {
    margin: 10px;
    margin-bottom: 30px;
  }
`;


const MenuTitle = styled.div`
  font-size: 10em;
  font-family: 'Monoton', cursive;
  text-align: center;
  margin-top: 10px;
  color: #3D3D3D;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 4em;
  }
`;

const PitcherWine = (props) => {
  const { wines } = props;
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>&nbsp;</StyledTableCell>
              <StyledTableCell>Verre (12cl)</StyledTableCell>
              <StyledTableCell>25cl</StyledTableCell>
              <StyledTableCell>50cl</StyledTableCell>
              <StyledTableCell>75cl</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wines.map(wine => {
              return (
                <StyledTableRow key={_uniqueId('array-line-')}>
                  <StyledTableCell>{wine.name}</StyledTableCell>
                  <StyledTableCell>{wine.prices[0] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[0]) : ' '}</StyledTableCell>
                  <StyledTableCell>{wine.prices[1] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[1]) : ' '}</StyledTableCell>
                  <StyledTableCell>{wine.prices[2] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[2]) : ' '}</StyledTableCell>
                  <StyledTableCell>{wine.prices[3] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[3]) : ' '}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <SwipeLeft>
        <table>
          <tbody>
            <tr>
              <td><ArrowBack style={{ fontSize: 40 }} /></td>
              <td>Faites glisser vers la gauche pour voir le reste du tableau</td>
            </tr>
          </tbody>
        </table>
      </SwipeLeft>
    </>
  );
};

const useStyles = makeStyles({
  table: {
    minWidth: 414,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const SwipeLeft = styled.div`
  visibility: hidden;
  @media (max-width: 600px) {
    visibility: visible;
    margin: 10px 0px;
  }
`;

export default Menu;