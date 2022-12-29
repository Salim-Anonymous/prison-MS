import { atom } from "recoil";

const user = atom({
    key: "isAdmin",
    default: false
});

export default user;

