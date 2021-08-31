import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Box, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';

const useStyle= makeStyles((theme)=>({
    grbg:{
        backgroundImage: `linear-gradient(150deg, ${cyan[400]} 49.8%, ${pink.A400} 50%)`,
        color: theme.palette.light.main,
    },
}));

const Test = () => {
    const classes= useStyle();
    return (
        <>
        <HelmetProvider>
            <Helmet prioritizeSeoTags>
            <title>Test Mode</title>
            </Helmet>
        </HelmetProvider>

        <Container>
            <Paper 
                component={Box} 
                my="10%" 
                p={2} 
                boxShadow={3}
                className={classes.grbg}
            >
            <Typography variant="h4" display="inline">Why Choose Us?</Typography>
            <Typography variant="subtitle2" align="right">
                Fugiat aute dolor occaecat
                Qui irure commodo voluptate laborum in. Consequat amet culpa commodo proident enim occaecat ex Lorem proident consectetur exercitation est. Officia amet ex nostrud ad. Lorem eu dolor sit irure qui consequat occaecat. Laborum dolore ullamco nisi anim exercitation anim ipsum ea nisi. Esse magna cillum sit quis nostrud culpa Lorem proident veniam ex culpa eu.

Labore deserunt eiusmod elit proident nulla deserunt excepteur fugiat eu in fugiat. Cupidatat deserunt dolore aliqua anim consequat sit fugiat deserunt id. Exercitation incididunt amet nulla tempor ipsum dolor ullamco enim. Mollit aute fugiat fugiat nostrud nostrud incididunt nostrud labore sunt. Ullamco nostrud duis exercitation proident dolor elit irure ex sunt tempor minim fugiat ex non. Irure ea do ullamco est veniam Lorem cupidatat.

Consequat laboris nostrud reprehenderit fugiat laborum et. Commodo proident est velit excepteur elit commodo duis reprehenderit enim enim irure commodo. Officia ipsum ad consectetur elit id officia eu irure elit qui irure adipisicing laborum. Pariatur do aute dolor officia nostrud aute adipisicing ipsum. Ad voluptate cillum commodo Lorem officia non ex aliquip consectetur veniam commodo cupidatat culpa. Elit ut fugiat fugiat magna consectetur in incididunt officia laborum culpa mollit nisi commodo non.

Ullamco ex fugiat est esse qui deserunt tempor velit aliquip aliquip enim quis Lorem. Cillum commodo nostrud tempor non consequat tempor nulla fugiat amet dolor ullamco deserunt. Adipisicing adipisicing irure exercitation consectetur anim ullamco aliqua. Ea excepteur incididunt eiusmod Lorem proident sint nisi voluptate elit ea eu. Aliqua nostrud non ad eiusmod elit reprehenderit et ipsum duis.

Incididunt consequat mollit pariatur magna nisi cillum. Excepteur proident duis dolore amet ipsum ex est proident est. Lorem proident deserunt in elit consequat. Incididunt enim do velit eu enim veniam sint. Ad non eiusmod ut sunt pariatur in elit fugiat esse culpa reprehenderit. Minim nulla velit ex ipsum in reprehenderit. Cillum amet velit quis tempor sint veniam elit magna culpa nulla et.

Fugiat deserunt anim dolor commodo. Anim aliqua magna elit officia esse deserunt aute nisi et exercitation. Sit esse ad officia enim cupidatat cillum occaecat Lorem amet ut amet irure voluptate laborum. Laborum voluptate nisi ad consequat mollit irure aute. Lorem voluptate in quis sit consequat aliquip labore ullamco commodo cupidatat in qui.

Veniam adipisicing exercitation dolore quis non. Aute aute sint ullamco laboris do qui occaecat aliqua quis ullamco cillum consectetur amet. Irure adipisicing veniam proident laboris. Lorem duis esse ad proident dolore elit laborum elit mollit aliqua reprehenderit qui.

Cillum esse anim excepteur ut sit excepteur velit dolor. Dolore eiusmod id tempor incididunt mollit do anim ipsum mollit ipsum cupidatat laboris Lorem qui. Dolore anim eiusmod nostrud aute in ullamco. Ex excepteur sit officia enim veniam excepteur in dolor sit sint consectetur eiusmod qui esse. Proident proident sit est id elit adipisicing duis velit.

Mollit anim sunt nostrud laboris. Est labore esse consectetur et anim consequat enim commodo deserunt aliquip laboris pariatur exercitation. Adipisicing consectetur ut nisi cillum consequat incididunt magna fugiat pariatur dolor ullamco. Ipsum adipisicing duis deserunt aliquip Lorem enim ut proident sit sit eiusmod ea mollit. Et duis ex irure ullamco commodo incididunt veniam consequat aliquip officia aute. Nostrud Lorem do irure eiusmod.

Aliqua irure et et sit non id. Quis reprehenderit tempor do quis tempor aliqua ad ex veniam labore nulla duis quis. Enim aute aliquip fugiat culpa labore.
            </Typography>
            </Paper>
        </Container>
        </>
    );
};

export default Test;
