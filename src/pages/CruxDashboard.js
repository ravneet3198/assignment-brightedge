import { Box, TextField, Button, Autocomplete, Chip, CircularProgress, Alert,Snackbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react'
import { getMetricsDetailsAll } from '../utils/utils';
import { columns } from '../utils/constants';

function CruxDashboard() {
  const [metricsData, setMetricsData] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([])
  const [errorData, setErrorData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const searchHandler = async () => {
    setIsLoading(true)
    let data = await getMetricsDetailsAll(selectedUrls);
    let fullfilledData = data.filter((val) => {
      return val.status === "fulfilled"
    }).map((el) => {
      let id = Math.random() * 1000;
      return { id, ...el.value }
    })
    let errorUrls = data.filter((val) => {
      return val.status === "rejected"
    }).map((el) => {
      return el.reason.url
    })
    setErrorData(errorUrls.join(", "))
    setSelectedUrls([]);
    setMetricsData(prev => [...prev, ...fullfilledData])
    setIsLoading(false)
  }
  return (
    <div className="crux-container">
      {errorData && <Snackbar
        open={true}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setErrorData("")} severity="error">
          {`Cannot find data for ${errorData}`}
        </Alert>
      </Snackbar>
      }

      <Box sx={{ width: 500, maxWidth: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', gap: '8px' }}>
        <Autocomplete
          sx={{ width: 500 }}
          clearIcon={true}
          value={selectedUrls}
          onChange={(event, value) => setSelectedUrls(value)}
          options={[]}
          freeSolo
          multiple
          renderTags={(value, props) =>
            value.map((option, index) => (
              <Chip label={option} {...props({ index })} />
            ))
          }
          renderInput={(params) => <TextField label="Enter Url" {...params} />}
        />
        <Button variant="contained" onClick={searchHandler} disabled={selectedUrls.length === 0}>Search</Button>
      </Box>
      {isLoading && <CircularProgress disableShrink style={{
        position: "absolute",
        color: "green"
      }} />}
      <Box sx={{ height: 400, width: '500', marginTop: '16px' }}>
        <DataGrid
          rows={metricsData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            }

          }}

          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default CruxDashboard;
