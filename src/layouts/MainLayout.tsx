import { ReactNode } from 'react';
import { Drawer, Box } from '@mui/material';
import { Sidebar } from 'components';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const drawerWidth = 300;
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          backgroundColor: 'white',
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{ elevation: 2 }}
      >
        <Sidebar />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#EEEEEE' }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
