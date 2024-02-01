import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import ReciptTable from "./ReciptTable";
import CardFooter from "./CardFooter";

export default function ReciptReviewCard({
  TotalItems,
  onSelect,
  totalBill,
  date,
}) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={onSelect}>
            X
          </IconButton>
        }
        title={""}
        subheader={date}
      />

      <CardContent>
        <ReciptTable
          className="mt-5 table"
          noOfItems={TotalItems}
        ></ReciptTable>
      </CardContent>
      <CardFooter totalBill={totalBill}></CardFooter>
      <CardActions disableSpacing>
        <IconButton aria-label="share"></IconButton>
      </CardActions>
    </Card>
  );
}
