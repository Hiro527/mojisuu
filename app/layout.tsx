import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';

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
                            </Toolbar>
                        </AppBar>
                    </Box>
                    {children}
                </body>
            </AppRouterCacheProvider>
        </html>
    );
}
