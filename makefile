build:
	google-chrome --pack-extension=run_in_terminal --pack-extension-key=run_in_terminal.pem

install:
	# install local app
	mkdir -p ~/.cache/run_in_terminal
	cp local_app/start ~/.cache/run_in_terminal
	
	# install msg hosts
	mkdir -p ~/.config/google-chrome/NativeMessagingHosts
	native_hosts/replace.py native_hosts/org.deepin.terminal.json_template > native_hosts/org.deepin.terminal.json
	cp native_hosts/org.deepin.terminal.json ~/.config/google-chrome/NativeMessagingHosts/
