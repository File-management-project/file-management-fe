// src/types.ts

export type SubMenu = {
  title: string;
  path: string;
};

export type Menu = {
  title: string;
  submenu: SubMenu[];
};
