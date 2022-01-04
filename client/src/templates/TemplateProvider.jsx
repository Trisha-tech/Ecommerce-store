import React,{createContext} from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const TemplateContext=createContext(null);

const TemplateProvider=({children})=>{
const theme=createTheme({
overrides:{
    MuiDialog:{
        paperWidthSm:{
            maxWidth:"unset"
        }
    },
    MuiDialogContent:{
        root:{
            padding:0,
            '&:first-child':{
                paddingTop:0
            }
        }
    }
}
})
return(
<TemplateContext.Provider>
    <ThemeProvider theme={theme}>
        <CssBaseline>
{children}
</CssBaseline>
    </ThemeProvider>
</TemplateContext.Provider>
)
}
export default TemplateProvider;