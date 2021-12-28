/* eslint-disable react/jsx-key */
import React, { Key, CSSProperties } from "react";
import { Grid, Divider } from "@mui/material";
interface dataItem {
  label: String;
  value: String;
}
interface RenderItemProps {
  item: dataItem;
}
interface DetailBlockProps {
  data: dataItem[];
  labelStyle?: CSSProperties;
  valueStyle?: CSSProperties;
  direction?: "row" | "column";
}
const DetailBlock: React.FC<DetailBlockProps> = ({
  data,
  labelStyle,
  valueStyle,
  direction = "row",
}) => {
  const RenderItem: React.FC<RenderItemProps> = ({ item }) => {
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item style={{ fontWeight: "bold", ...valueStyle }}>
          {item.value}
        </Grid>
        <Grid item style={{ fontWeight: "bold", ...labelStyle }}>
          {item.label}
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid
      container
      direction={direction === "column" ? "column" : "row"}
      spacing={2}
    >
      {data.map((item, index) => {
        return (
          <React.Fragment key={item.label as Key}>
            <Grid item>
              <RenderItem item={item} key={item.label as Key} />
            </Grid>
            {index + 1 < data.length && (
              <Grid item>
                <Divider
                  style={{
                    width: "100%",
                    padding: "1rem 0rem",
                  }}
                  flexItem
                  orientation={direction === "row" ? "vertical" : "horizontal"}
                />
              </Grid>
            )}
          </React.Fragment>
        );
      })}
    </Grid>
  );
};
export default DetailBlock;
