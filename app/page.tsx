'use client';

import { CssBaseline, Grid, TextField, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export const runtime = 'edge';

export default function Home() {
    const [length, setLength] = useState(0);
    const [text, setText] = useState('');
    const [avoidTags, setAvoidTags] = useState(true);

    const handleTextUpdate = (data: string, flag?: boolean) => {
        setText(data);
        if (flag ?? avoidTags) {
            setLength(data.replaceAll(/\<.*?\>/g, '').length);
        } else {
            setLength(data.length);
        }
    };

    const handleCheckUpdate = (value: boolean) => {
        setAvoidTags(value);
        handleTextUpdate(text, value);
    };

    return (
        <main>
            <CssBaseline>
                <Grid
                    container
                    spacing={2}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}
                >
                    <Grid item xs={10} md={6}>
                        <TextField multiline fullWidth rows={20} onChange={(ev) => handleTextUpdate(ev.target.value)}></TextField>
                        <FormControlLabel
                            control={<Checkbox defaultChecked onChange={(ev) => handleCheckUpdate(ev.target.checked)}></Checkbox>}
                            label="HTMLタグを無視する"
                        ></FormControlLabel>
                        <Typography>{length}文字</Typography>
                    </Grid>
                </Grid>
            </CssBaseline>
        </main>
    );
}
