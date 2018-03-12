import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

df = pd.read_csv('sample30DataAllInt.csv')
print(df.head())
X = df.drop('Status', axis=1)
y = df['Status']
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=1)
random_forest = RandomForestClassifier(n_estimators=30, max_depth=10, random_state=1)
random_forest.fit(X_train, y_train)
y_predict = random_forest.predict(X_test)
accuracy_score(y_test, y_predict)



for tree_in_forest in random_forest.estimators_:
 if (i_tree <1):        
    tree.export_graphviz(tree_in_forest, out_file=dotfile)
    pydotplus.graph_from_dot_data(dotfile.getvalue()).write_png('dtree'+ str(i_tree) +'.png')
    i_tree = i_tree + 1