import sys
import os
import csv
import pandas as pd
from pandas import DataFrame, Series

class KeewiReader(object):
    def __init__(self, csv_path):
        self.fp = csv_path
        self.df = pd.read_csv(self.fp)
        self.df_rows = self.df.iterrows()
        
    def get_json_format(self, data_format):
        col_names = list(self.df.columns.values)
        # print(col_names)
        device_extensions = []
        for col_name in col_names:
            if col_name.startswith("Device ID"):
                extension = col_name[len("Device ID"):]
                # print(extension)
                device_extensions.append(extension)
        
        # hash assuming all have a data point for each time_stamp
        time_entries = []
        time_hash = {}
        device_hash = {}
        for index, row in self.df_rows:
            # print(row)
            time_entry = {}
            time_entry["kWh_sum"] = row["kWh Sum"]
            time_entry["W_sum"] = row["W Sum"]
            time_entry["device_data"] = []
            
            for device_ext in device_extensions:
                
                # set time_stamp for this entry, or check it is same time_stamp as was set
                if time_entry.get("time_stamp", None) is None:
                    time_entry["time_stamp"] = row["time_stamp" + device_ext]
                else:
                    assert time_entry["time_stamp"] == row["time_stamp" + device_ext]
                    
                device_entry = {}
                device_entry["device_id"] = row["Device ID" + device_ext]
                device_entry["kWh"] = row["kWh" + device_ext]
                device_entry["power"] = row["Power" + device_ext]
                device_entry["cumul_kwh"] = row["Cumul kWh" + device_ext]
                time_entry["device_data"].append(device_entry)
                
                # needed if using device hash only
                device_entry["time_stamp"] = row["time_stamp" + device_ext]
                
                if device_hash.get(device_entry["device_id"], None) is None:
                    device_hash[device_entry["device_id"]] = []
                device_hash[device_entry["device_id"]].append(device_entry)
            
            time_entries.append(time_entry)
            time_hash[time_entry["time_stamp"]] = time_entry
        
        if data_format == "time_hash":
            return time_hash
        elif data_format == "per_device":
            return device_hash
        return time_entries
            

if __name__ == '__main__':
    new_reader = KeewiReader("keewi_csv.csv")
    print(new_reader.get_json_format("per_device"))
    