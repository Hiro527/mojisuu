'use client';

import { CssBaseline, Grid, TextField, Typography, Checkbox, FormControlLabel, Stack, Box, Button } from '@mui/material';
import { useState } from 'react';

export const runtime = 'edge';

export default function Home() {
    const [length, setLength] = useState(0);
    const [lengthWithoutSpace, setLengthWithoutSpace] = useState(0);
    const [text, setText] = useState('');
    const [avoidTags, setAvoidTags] = useState(true);
    const [avoidReturns, setAvoidReturns] = useState(true);

    const handleTextUpdate = (value: string, f1?: boolean, f2?: boolean) => {
        setText(value);

        if (f1 ?? avoidTags) value = value.replaceAll(/\<.*?\>/g, '');
        if (f2 ?? avoidReturns) value = value.replaceAll('\n', '');

        setLength(value.length);
        setLengthWithoutSpace(value.replaceAll(/\s/g, '').length);
    };

    const handleTagCheckUpdate = (value: boolean) => {
        setAvoidTags(value);
        handleTextUpdate(text, value, avoidReturns);
    };

    const handleReturnCheckUpdate = (value: boolean) => {
        setAvoidReturns(value);
        handleTextUpdate(text, avoidTags, value);
    };

    const handleClear = () => {
        setText('');
        setLength(0);
        setLengthWithoutSpace(0);
    };

    return (
        <main>
            <CssBaseline>
                <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}
                >
                    <Grid item xs={10} md={8}>
                        <FormControlLabel
                            control={<Checkbox defaultChecked onChange={(ev) => handleTagCheckUpdate(ev.target.checked)}></Checkbox>}
                            label="HTMLタグを無視する"
                        ></FormControlLabel>
                        <FormControlLabel
                            control={<Checkbox defaultChecked onChange={(ev) => handleReturnCheckUpdate(ev.target.checked)}></Checkbox>}
                            label="改行を無視する"
                        ></FormControlLabel>
                        <TextField multiline fullWidth rows={20} onChange={(ev) => handleTextUpdate(ev.target.value)} value={text}></TextField>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <Typography sx={{ marginTop: '10px' }} variant="h6">
                                {length}文字 / {lengthWithoutSpace}文字(空白以外)
                            </Typography>
                            <Button variant="contained" color="error" onClick={handleClear}>
                                クリア
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </CssBaseline>
        </main>
    );
}
