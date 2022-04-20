import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
    shopFilters: {
        width: '80%',
    },
    shopFiltersTitle: {
        fontSize: '1.3rem',
        padding: '8px 0',
        marginBottom: '10px',
        paddingLeft: '12px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.15)'
    },
    shopFiltersItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 12px',
        margin: '3px 0',
        borderRadius: '6px',
        transition: 'all 0.1s ease-out',
        "&:hover": {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            cursor: 'pointer'
        }
    },
    itemName: {
        paddingLeft:'8px',
    },

    active: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 12px',
        margin: '3px 0',
        borderRadius: '6px',
        transition: 'all 0.1s ease-out',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
    }
}))