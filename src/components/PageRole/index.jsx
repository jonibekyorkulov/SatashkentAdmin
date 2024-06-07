import React, { useEffect, useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, BoxFooter, BoxFooterText, AttendSearchButton, ModalSelectWrapper } from '../../global_styles/styles'
import PageSelector from '../PageSelector'
import { TableTHHeader } from '../ExampleTable'
import { createUserReq, getUser } from './requests'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Pagination, Checkbox } from '@mui/material'
import { users_add } from '../../utils/API_urls'
import { useSelector } from 'react-redux'
import CustomizedInputSimple from '../CustomizedInputSimple'
import CustomizedInput from '../CustomizedInput'
import CreateRole from '../CreateRole'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PageRole() {

    const user = useSelector(state => state.user)
    const [pageSize, setPageSize] = useState(10)
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState(null)
    const [selectPage, setSelectPage] = useState(null)

    const [open, setOpen] = React.useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getUser((data) => {
            setUsers(data.users)
        },
            (error) => {
                console.log(error)
            }, pageSize)
    }, [pageSize, newUser])

    const createUser = (requestBody) => {
        createUserReq(users_add, {
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            age: requestBody.age
        }, response => {
            setNewUser(response.data)
        }, error => {
            console.log(error)
        })
    }

    return (
        <>
            <BoxHeader>
                <PageSelector chageValueFunction={(val) => {
                    setPageSize(val)
                }} />
                <AttendSearchButton>
                    <CustomizedInput callback_func={(val) => { console.log(val) }} />
                </AttendSearchButton>
                <CreateRole getPostInfo={requestBody => { createUser(requestBody) }} />
            </BoxHeader>
            <BoxBody>
                <ClassScheduleTableWrapper>
                    <table>
                        <thead>
                            <tr>
                                <TableTHHeader
                                    text="ID"
                                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_78_23314)">
                                            <path d="M16.0008 0.666667C16.0008 1.03533 15.7021 1.33333 15.3341 1.33333H6.66746C6.29946 1.33333 6.00079 1.03533 6.00079 0.666667C6.00079 0.298 6.29946 0 6.66746 0H15.3341C15.7021 0 16.0008 0.298 16.0008 0.666667ZM13.3341 3.33333H6.66746C6.29946 3.33333 6.00079 3.63133 6.00079 4C6.00079 4.36867 6.29946 4.66667 6.66746 4.66667H13.3341C13.7021 4.66667 14.0008 4.36867 14.0008 4C14.0008 3.63133 13.7021 3.33333 13.3341 3.33333ZM11.3341 6.66667H6.66746C6.29946 6.66667 6.00079 6.96467 6.00079 7.33333C6.00079 7.702 6.29946 8 6.66746 8H11.3341C11.7021 8 12.0008 7.702 12.0008 7.33333C12.0008 6.96467 11.7021 6.66667 11.3341 6.66667ZM9.33412 10H6.66746C6.29946 10 6.00079 10.298 6.00079 10.6667C6.00079 11.0353 6.29946 11.3333 6.66746 11.3333H9.33412C9.70212 11.3333 10.0008 11.0353 10.0008 10.6667C10.0008 10.298 9.70212 10 9.33412 10ZM5.13879 12.862L4.00079 14V0.666667C4.00079 0.298 3.70212 0 3.33412 0C2.96612 0 2.66746 0.298 2.66746 0.666667V14L1.52879 12.8613C1.26812 12.6007 0.846792 12.6007 0.586125 12.8613C0.325458 13.122 0.325458 13.5433 0.586125 13.804L2.39079 15.6087C2.65079 15.8687 2.99212 15.9987 3.33412 15.9987C3.67612 15.9987 4.01679 15.8687 4.27679 15.6087L6.08146 13.804C6.34212 13.5433 6.34212 13.122 6.08146 12.8613C5.82079 12.6007 5.39946 12.6013 5.13879 12.862Z" fill="#B8B8B8" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_78_23314">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>}
                                />
                                <TableTHHeader
                                    text="Name"
                                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_78_23319)">
                                            <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8" />
                                            <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79025 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_78_23319">
                                                <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    }
                                />
                                <TableTHHeader
                                    text="Edit"
                                    iconc={null}
                                />
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? users.map((elem, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{elem.id}</th>
                                            <th>{elem.firstName}</th>
                                            <th>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        borderRadius: "10px",
                                                        textTransform: "capitalize",
                                                        boxShadow: "none",
                                                        padding: "6px",
                                                        marginRight: "20px",

                                                    }}
                                                    onClick={() => { setSelectPage(elem); handleClickOpen(); }}
                                                    startIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_1148_17994)">
                                                            <path d="M12.44 0.619885L4.31195 8.74789C4.00151 9.05665 3.7554 9.42392 3.58787 9.82845C3.42034 10.233 3.33471 10.6667 3.33595 11.1046V11.9999C3.33595 12.1767 3.40619 12.3463 3.53121 12.4713C3.65624 12.5963 3.82581 12.6666 4.00262 12.6666H4.89795C5.33579 12.6678 5.76953 12.5822 6.17406 12.4146C6.57858 12.2471 6.94585 12.001 7.25462 11.6906L15.3826 3.56255C15.7722 3.172 15.991 2.64287 15.991 2.09122C15.991 1.53957 15.7722 1.01044 15.3826 0.619885C14.9864 0.241148 14.4594 0.0297852 13.9113 0.0297852C13.3632 0.0297852 12.8362 0.241148 12.44 0.619885ZM14.44 2.61989L6.31195 10.7479C5.93603 11.1215 5.42795 11.3318 4.89795 11.3332H4.66928V11.1046C4.67067 10.5745 4.881 10.0665 5.25462 9.69055L13.3826 1.56255C13.525 1.42652 13.7144 1.35061 13.9113 1.35061C14.1082 1.35061 14.2976 1.42652 14.44 1.56255C14.5799 1.7029 14.6585 1.89301 14.6585 2.09122C14.6585 2.28942 14.5799 2.47954 14.44 2.61989Z" fill="white" />
                                                            <path d="M15.3333 5.986C15.1565 5.986 14.987 6.05624 14.8619 6.18126C14.7369 6.30629 14.6667 6.47586 14.6667 6.65267V10H12C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12V14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H9.36133C9.53815 1.33333 9.70771 1.2631 9.83274 1.13807C9.95776 1.01305 10.028 0.843478 10.028 0.666667C10.028 0.489856 9.95776 0.320286 9.83274 0.195262C9.70771 0.0702379 9.53815 0 9.36133 0L3.33333 0C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H10.8953C11.3333 16.0013 11.7671 15.9156 12.1718 15.7481C12.5764 15.5806 12.9438 15.3345 13.2527 15.024L15.0233 13.252C15.3338 12.9432 15.58 12.576 15.7477 12.1715C15.9153 11.767 16.0011 11.3332 16 10.8953V6.65267C16 6.47586 15.9298 6.30629 15.8047 6.18126C15.6797 6.05624 15.5101 5.986 15.3333 5.986ZM12.31 14.0813C12.042 14.3487 11.7031 14.5337 11.3333 14.6147V12C11.3333 11.8232 11.4036 11.6536 11.5286 11.5286C11.6536 11.4036 11.8232 11.3333 12 11.3333H14.6167C14.5342 11.7023 14.3493 12.0406 14.0833 12.3093L12.31 14.0813Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1148_17994">
                                                                <rect width="16" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    }
                                                >
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        borderRadius: "10px",
                                                        textTransform: "capitalize",
                                                        boxShadow: "none",
                                                        padding: "6px",
                                                        marginRight: "20px",

                                                    }}
                                                    // onClick={() => { setSelectPage(elem); handleClickOpen(); }}
                                                    startIcon={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_1221_29003)">
                                                          <path d="M14.5026 2.66667H12.4359C12.2812 1.91428 11.8718 1.23823 11.2768 0.752479C10.6817 0.266727 9.93741 0.000969683 9.16927 0L7.83594 0C7.0678 0.000969683 6.32348 0.266727 5.72844 0.752479C5.13339 1.23823 4.724 1.91428 4.56927 2.66667H2.5026C2.32579 2.66667 2.15622 2.7369 2.0312 2.86193C1.90618 2.98695 1.83594 3.15652 1.83594 3.33333C1.83594 3.51014 1.90618 3.67971 2.0312 3.80474C2.15622 3.92976 2.32579 4 2.5026 4H3.16927V12.6667C3.17033 13.5504 3.52186 14.3976 4.14675 15.0225C4.77164 15.6474 5.61887 15.9989 6.5026 16H10.5026C11.3863 15.9989 12.2336 15.6474 12.8585 15.0225C13.4833 14.3976 13.8349 13.5504 13.8359 12.6667V4H14.5026C14.6794 4 14.849 3.92976 14.974 3.80474C15.099 3.67971 15.1693 3.51014 15.1693 3.33333C15.1693 3.15652 15.099 2.98695 14.974 2.86193C14.849 2.7369 14.6794 2.66667 14.5026 2.66667ZM7.83594 1.33333H9.16927C9.58279 1.33384 9.98602 1.46225 10.3237 1.70096C10.6613 1.93967 10.9169 2.27699 11.0553 2.66667H5.94994C6.08833 2.27699 6.34387 1.93967 6.68153 1.70096C7.01919 1.46225 7.42242 1.33384 7.83594 1.33333ZM12.5026 12.6667C12.5026 13.1971 12.2919 13.7058 11.9168 14.0809C11.5417 14.456 11.033 14.6667 10.5026 14.6667H6.5026C5.97217 14.6667 5.46346 14.456 5.08839 14.0809C4.71332 13.7058 4.5026 13.1971 4.5026 12.6667V4H12.5026V12.6667Z" fill="white" />
                                                          <path d="M7.16667 11.9998C7.34348 11.9998 7.51305 11.9296 7.63807 11.8046C7.7631 11.6796 7.83333 11.51 7.83333 11.3332V7.33317C7.83333 7.15636 7.7631 6.98679 7.63807 6.86177C7.51305 6.73674 7.34348 6.6665 7.16667 6.6665C6.98986 6.6665 6.82029 6.73674 6.69526 6.86177C6.57024 6.98679 6.5 7.15636 6.5 7.33317V11.3332C6.5 11.51 6.57024 11.6796 6.69526 11.8046C6.82029 11.9296 6.98986 11.9998 7.16667 11.9998Z" fill="white" />
                                                          <path d="M9.83073 11.9998C10.0075 11.9998 10.1771 11.9296 10.3021 11.8046C10.4272 11.6796 10.4974 11.51 10.4974 11.3332V7.33317C10.4974 7.15636 10.4272 6.98679 10.3021 6.86177C10.1771 6.73674 10.0075 6.6665 9.83073 6.6665C9.65392 6.6665 9.48435 6.73674 9.35932 6.86177C9.2343 6.98679 9.16406 7.15636 9.16406 7.33317V11.3332C9.16406 11.51 9.2343 11.6796 9.35932 11.8046C9.48435 11.9296 9.65392 11.9998 9.83073 11.9998Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                          <clipPath id="clip0_1221_29003">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                                          </clipPath>
                                                        </defs>
                                                      </svg>
                                                    }
                                                >
                                                </Button>
                                            </th>
                                        </tr>
                                    )
                                })
                                    :
                                    <tr>
                                        <th colSpan={12} align='center'>Loader</th>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </ClassScheduleTableWrapper>
            </BoxBody>
            <BoxFooter>
                <BoxFooterText>{`Jami 1 ta, 1 dan 1 gachasi ko'rsatilmoqda`}</BoxFooterText>
                <Pagination  count={5} shape="rounded" color="primary" onChange={(_, value) => {}} />
            </BoxFooter>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Postni o'zgartirish"}</DialogTitle>
                <DialogContent>
                    {selectPage?<DialogContentText id="alert-dialog-slide-description" sx={{minWidth: "320px"}}>
                        <Box
                            sx={{
                                marginBottom: "15px"
                            }}
                        >
                            <CustomizedInputSimple
                                callback_func={(val) => { console.log(val) }}
                                placeholder="title"
                                defaultValue={selectPage?.title}
                                type="text"
                            />
                        </Box>
                        <CustomizedInputSimple
                            callback_func={(val) => { console.log(val) }}
                            placeholder="body"
                            defaultValue={selectPage?.body}
                            type="text"
                        />
                    </DialogContentText>:<></>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
