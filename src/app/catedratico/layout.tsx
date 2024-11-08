
import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../../layouts/Sidebar';
import menuItems from '../../utils/menuCatedraticoItems';

export const metadata: Metadata = {
  title: "CATEDRATICO",
  description: "Generated by create next app",
};

type Props = {
  children: ReactNode;
};

const ProfesorLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar menuItems={menuItems}>
             {children}
      </Sidebar>
    </>
  );
};

export default ProfesorLayout;