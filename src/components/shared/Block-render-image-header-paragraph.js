import {Box} from "grommet";
import React from "react";
import {useMediaQuery} from "react-responsive";

const defaultProps = {

    properties: {
        text: {
            a: {
                render: () => {
                    return (
                        <Box>
                            Header
                        </Box>
                    )
                }
            },

            b: {
                render: () => {
                    return (
                        <Box>
                            Paragraph
                        </Box>
                    )
                }
            }

        },
        images: {
            a: {
                render: () => {
                    return (
                        <img style={{maxWidth: "100%", maxHeight: "100%"}} src={"/images/about-me.jpg"}/>
                    )
                }
            }
        }
    }
};

const LargeScreenRender = ({properties}) => {
  return (
      <Box width={"100%"} align={"center"} justify={"center"}>
          <Box width={"900px"} direction={"row"} gap={"large"} align={"center"} justify={"center"}>
              {properties.images.a.render()}
              <Box justify={"center"} align={"start"} wrap gap={"medium"}>
                  {properties.text.a.render()}
                  {properties.text.b.render()}
              </Box>
          </Box>
      </Box>
  )
};

const SmallScreenRender = ({properties}) => {
  return (
      <Box width={"100%"} align={"center"} justify={"center"}>
          {properties.images.a.render()}
          <Box margin={{top: "medium"}}>
              {properties.text.a.render()}
          </Box>
          <Box margin={{top: "medium"}}>
              {properties.text.b.render()}
          </Box>
      </Box>
  )
};

const BlockRenderImageHeaderParagraph = ({properties = defaultProps.properties}) => {

    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)'
    });

    return (
       isTabletOrMobileDevice ? <SmallScreenRender properties={properties}/> : <LargeScreenRender properties={properties}/>
    )

};

export default BlockRenderImageHeaderParagraph;