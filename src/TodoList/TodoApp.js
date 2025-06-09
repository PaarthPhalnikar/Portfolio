import React,{useState} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { AppBar, Grid, Paper, Toolbar, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { TodosProvider } from './context/todos.context'

function TodoApp() {
    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: pink[600],
            '&:hover': {
                backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: pink[600],
        },
    }));

    const label = { inputProps: { 'aria-label': 'Color switch demo' } }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit" sx={{ flexGrow: 1 }}>TODOS WITH HOOKS</Typography>
                    {/* <PinkSwitch {...label} defaultChecked /> */}
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
                <Grid size={{ xs: 11, md: 8,lg:8 }}>
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList/>
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp