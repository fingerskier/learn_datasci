from __future__ import print_functions

import pandas as pd

pd.__version__


city_names = pd.Series(['San Francisco', 'San Jose', 'Sacramento'])
population = pd.Series([852469, 1015785, 485199])

pd.DataFrame({'City Name': city_names, 'Population': population})
