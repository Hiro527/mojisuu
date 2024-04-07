import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';

import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

import './globals.css';

export const metadata: Metadata = {
    title: '文字数カウンター',
    description: '文字数を数えるためのシンプルなアプリです。',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <AppRouterCacheProvider>
                <body>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                    文字数カウンター
                                </Typography>
                                <IconButton
                                    sx={{ color: 'white' }}
                                    href="https://x.com/hirx527"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="@hirx527"
                                >
                                    <XIcon></XIcon>
                                </IconButton>
                                <IconButton
                                    sx={{ color: 'white' }}
                                    href="https://github.com/Hiro527/mojisuu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Hiro527/mojisuu"
                                >
                                    <GitHubIcon></GitHubIcon>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    {children}
                </body>
            </AppRouterCacheProvider>
        </html>
    );
}
