<template>
    <v-container>
        <loader v-if="isloading"></loader>
        <v-row>
            <v-col cols="12" md="10" class="offset-md-1">
                <v-card>
                    <v-toolbar flat color="#1d2735" dark>
                        <v-toolbar-title>Guardar / Editar Cliente</v-toolbar-title>
                    </v-toolbar>
                    
                    <!--<v-card-title></v-card-title>-->
                    <v-tabs horizontal color="#1d2735">
                        <v-tab>
                            DATOS DE USUARIO
                        </v-tab>
                        <v-tab>
                            HISTORIAL
                        </v-tab>
                        <v-tab>
                            PROTECCIÓN DE DATOS
                        </v-tab>
                        <v-tab-item class="pa-3 ma-1">
                            <v-col cols="12">
                                <v-card outlined class="pl-5 pr-5 pt-4 pb-0 mb-0 mt-3">
                                    <v-card-text>
                                        <v-form ref="form" v-model="validForm">
                                            <v-row dense>
                                                <v-col cols="12" md="3">
                                                    <v-text-field 
                                                        dense 
                                                        outlined 
                                                        v-model="usuario.nombre" 
                                                        label="Nombre" 
                                                        :rules="[required]"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="3">
                                                    <v-text-field 
                                                        dense outlined 
                                                        v-model="usuario.apellidos" 
                                                        label="Apellidos" 
                                                        :rules="[required]"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="3">
                                                    <v-text-field 
                                                        dense 
                                                        outlined 
                                                        v-model="usuario.dni" 
                                                        label="DNI" 
                                                        :rules="[required]"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="3">
                                                    <!-- <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="usuario.fecha_nacimiento" transition="scale-transition" offset-y min-width="290px">
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-text-field v-model="usuario.fecha_nacimiento" label="Fecha Nacimiento"
                                                                append-icon="mdi-calendar" v-bind="attrs" v-on="on">
                                                            </v-text-field>
                                                        </template>
                                                        <v-date-picker color="#1d2735" first-day-of-week="1" v-model="usuario.fecha_nacimiento" no-title scrollable>
                                                            <v-spacer></v-spacer>
                                                            <v-btn text color="red" @click="menu = false"><strong>Cancelar</strong></v-btn>
                                                            <v-btn text color="success" @click="$refs.menu.save(usuario.fecha_nacimiento)"><strong>OK</strong></v-btn>
                                                        </v-date-picker>
                                                    </v-menu> -->

                                                    <DateSelect
                                                        v-model="usuario.fecha_nacimiento"
                                                        label="Fecha de nacimiento"
                                                        outlined
                                                        dense
                                                    />
                                                </v-col>
                                            </v-row>
                                            <v-row dense>
                                                <v-col cols="12" md="4">
                                                    <v-text-field 
                                                        dense 
                                                        outlined 
                                                        v-model="usuario.telefono" 
                                                        label="Teléfono" 
                                                        :rules="[required]"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field 
                                                        dense 
                                                        outlined 
                                                        v-model="usuario.email" 
                                                        label="Email" 
                                                        :rules="[required, email]"
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-text-field dense outlined v-model="usuario.profesion" label="Profesión" ></v-text-field>
                                                </v-col>
                                                
                                            </v-row>
                                            <v-row dense>
                                                <v-col cols="12" md="6">
                                                    <v-text-field
                                                        v-model="usuario.ciudad"
                                                        label="Ciudad"
                                                        outlined
                                                        dense
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-text-field
                                                        v-model="usuario.pais"
                                                        label="País"
                                                        outlined
                                                        dense
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="12">
                                                    <v-text-field dense outlined v-model="usuario.direccion" label="Dirección" ></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <!--<v-row dense>
                                                <v-col cols="12" md="6">
                                                    <v-text-field dense outlined v-model="usuario.codigo" label="Código" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <v-file-component class="mt-0 pt-0" label="Avatar" v-on:file_changed="fileChanged"></v-file-component>
                                                </v-col>
                                            </v-row>-->
                                            <v-row dense>
                                                <v-col cols="12" md="12">
                                                    <v-textarea dense height="100px" outlined v-model="usuario.observaciones" label="Observaciones" class="pb-0 mb-0"></v-textarea>
                                                </v-col>
                                            </v-row>
                                            
                                            <!--<v-col cols="12" md="6">
                                                <v-img max-width="80%" :src="usuario.avatar_path"></v-img>
                                            </v-col>-->
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-row dense>
                                            <v-col cols="12">
                                                <v-btn @click="saveUsuario" :disabled="isloading" color="success" class="white--text pt-0 mt-0">Guardar</v-btn>
                                                <v-btn v-if="usuario.id" @click="dialog = true" :disabled="isloading" color="red" class="white--text">Eliminar</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-tab-item>
                        <v-tab-item class="pa-3 ma-1">
                            <v-col cols="12" md="10" class="offset-md-1">
                                <v-card outlined class="pl-5 pr-5 pt-4 pb-0 mb-0 mt-3">
                                    <v-card-text>
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-textarea dense height="100px" outlined v-model="usuario.consulta" label="Motivo de Consulta"></v-textarea>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-textarea dense height="300px" outlined v-model="usuario.tratamiento" label="Valoración y Tratamiento"></v-textarea>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-textarea dense height="100px" outlined v-model="usuario.antecedentes" label="Antecedentes Médicos"></v-textarea>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-textarea dense height="60px" outlined v-model="usuario.alergias" label="Alergias"></v-textarea>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-textarea dense height="60px" outlined v-model="usuario.ejercicio" label="Ejercicio"></v-textarea>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-row dense>
                                            <v-col cols="12">
                                                <v-btn @click="saveUsuario" :disabled="isloading" color="success" class="white--text pt-0 mt-0">Guardar</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-tab-item>
                        <v-tab-item class="pa-3 ma-1">
                            <v-col cols="12" md="10" class="offset-md-1">
                                <v-card outlined class="pl-5 pr-5 pt-4 mt-3">
                                    <v-card-text>
                                        <v-row dense v-if="usuario.firma == null || usuario.firma == 0">
                                            <v-col cols="12">
                                                <v-btn @click="dialogFirma = true" :disabled="isloading" color="success" class="white--text pt-0 mt-0">Firmar</v-btn>
                                            </v-col>
                                        </v-row>
                                        <v-row dense v-else>
                                            <v-col cols="12">
                                                <a :href="usuario.pdf" target="_blank" >
                                                    <v-btn color="success" class="white--text pt-0 mt-0">Ver PDF</v-btn>
                                                </a>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog @click:outside="closeDialogFirma" v-model="dialogFirma" height="750">
            <v-card>
                <v-card-title class="headline primary white--text" dark primary-title>
                    Política de privacidad
                </v-card-title>

                <v-card-text class="px-3 py-3">
                    <p>
                        Respetando lo establecido en la legislación vigente, (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y 
                        organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos. 
                    </p>
                    <br>

                    <h4>LEYES QUE INCORPORA ESTA POLÍTICA DE PRIVACIDAD</h4>
                    <p>
                        Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:
                    </p>
                    <p>
                        El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).
                    </p>    
                    <p>
                        La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).
                    </p>
                    <p>
                        El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).
                    </p>
                    <p>    
                        La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE). 
                    </p>
                    <br>

                    <h4>IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO DE LOS DATOS PERSONALES</h4>
                    <p> 
                        Dirección: <span style="font-weight:bold;">Calle Lope de Rueda 80, Málaga 29190</span>
                    </p>
                    <p>
                        Teléfono de contacto: <span style="font-weight:bold;"> 604163588</span>
                    </p>
                    <p>
                        Email de contacto: <span style="font-weight:bold;">info@marianaranjopsicologa.es  </span> 
                    </p>
                    <br>

                    <h4>REGISTRO DE DATOS DE CARÁCTER PERSONAL</h4>
                    <p>
                        En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por 
                        <a href="http://www.marianaranjopsicologa.es/">www.marianaranjopsicologa.es</a>, mediante los formularios en sus páginas quedarán incorporados y 
                        serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre y el Usuario o el 
                        mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. 
                        Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, 
                        se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y 
                        las demás circunstancias establecidas en el RGPD. 
                    </p>
                    <br>

                    <h4>PRINCIPIOS APLICABLES AL TRATAMIENTO DE LOS DATOS PERSONALES</h4>
                    <p>
                        El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 
                        y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:
                    </p>
                    <p>
                        Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente 
                        transparente de los fines para los cuales se recogen los datos personales.
                    </p>
                    <p>
                        Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.
                    </p>
                    <p>
                        Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines 
                        para los que son tratados.
                    </p>
                    <p>
                        Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.
                    </p>
                    <p>    
                        Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del 
                        Usuario durante el tiempo necesario para los fines de su tratamiento.
                    </p>    
                    <p>
                        Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.
                    </p>
                    <p>
                        Principio de responsabilidad proactiva: el responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen. 
                    </p>
                    <br>

                    <h4>CATEGORÍAS DE DATOS PERSONALES</h4>
                    <p>
                        Base legal para el tratamiento de los datos personales
                    </p>
                    <p>
                        La base legal para el tratamiento de los datos personales es el consentimiento. se compromete a recabar el consentimiento expreso y 
                        verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.
                    </p>
                    <p>
                        El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. 
                        Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.
                    </p>    
                    <p>
                        En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información 
                        o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea 
                        obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.
                    </p>
                    <p>
                        Fines del tratamiento a que se destinan los datos personales
                    </p>
                    <p>
                        Los datos personales son recabados y gestionados por con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre 
                        el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una 
                        solicitud o consulta.
                    </p>
                    <p>
                        Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del 
                        objeto social de www.marianaranjopsicologa.es , así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar 
                        el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.
                    </p>
                    <p>
                        En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se 
                        destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada. 
                    </p>
                    <br>

                    <h4>PERÍODOS DE RETENCIÓN DE LOS DATOS PERSONALES</h4>
                    <p>Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, 
                        únicamente durante el plazo legal establecido, o hasta que el Usuario solicite su supresión.
                    </p>
                    <br>

                    <h4>DESTINATARIOS DE LOS DATOS PERSONALES</h4>
                    <h4>DATOS PERSONALES DE MENORES DE EDAD</h4>
                    <p>
                        Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y 
                        garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de 
                        forma lícita por <a href="http://www.marianaranjopsicologa.es/">www.marianaranjopsicologa.es</a>. Si se trata de un menor de 14 años, será necesario 
                        el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado. 
                    </p>
                    <br>

                    <h4>SECRETO Y SEGURIDAD DE LOS DATOS PERSONALES</h4>
                    <p>
                        Se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, 
                        de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de 
                        datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
                    </p>
                    <p>
                        Sin embargo, debido a que no puede garantizar la inexpugnabilidad de internet ni la ausencia total de hackers u otros que accedan 
                        de modo fraudulento a los datos personales, el responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando 
                        ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las 
                        personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda 
                        violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o 
                        tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.
                    </p>
                    <p>
                        Los datos personales serán tratados como confidenciales por el responsable del tratamiento, quien se compromete a informar de y a garantizar 
                        por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual 
                        le haga accesible la información. 
                    </p>
                    <br>

                    <h4>DERECHOS DERIVADOS DEL TRATAMIENTO DE LOS DATOS PERSONALES</h4>
                    <p>
                        El Usuario podrá, por tanto, ejercer frente al responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018,
                        de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:
                    </p>
                    <p>
                        <span style="font-weight: bold;">Derecho de acceso:</span> Es el derecho del Usuario a obtener confirmación de si está tratando o no sus datos 
                        personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que haya realizado o realice, 
                        así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o 
                        previstas de los mismos.
                    </p>
                    <p>
                        <span style="font-weight: bold;">Derecho de rectificación:</span> Es el derecho del Usuario a que se modifiquen sus datos personales que resulten 
                        ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.
                    </p>
                    <p>
                        <span style="font-weight: bold;">Derecho de supresión («el derecho al olvido»):</span> Es el derecho del Usuario, siempre que la legislación 
                        vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los 
                        cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; 
                        el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados 
                        ilícitamente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos 
                        producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, 
                        el responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables 
                        para informar a los responsables que estén tratando los datos personales de la solicitud del inT.do de supresión de cualquier enlace a 
                        esos datos personales.
                    </p>
                    <p>
                        <span style="font-weight: bold;">Derecho a la limitación del tratamiento:</span> Es el derecho del Usuario a limitar el tratamiento de sus datos 
                        personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; 
                        el tratamiento sea ilícito; el responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer 
                        reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.
                    </p>
                    <p>
                        <span style="font-weight: bold;">Derecho a la portabilidad de los datos:</span> En caso de que el tratamiento se efectúe por medios automatizados, 
                        el Usuario tendrá derecho a recibir del responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura 
                        mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el responsable del tratamiento transmitirá 
                        directamente los datos a ese otro responsable.
                    </p>
                    <p>
                        <span style="font-weight: bold;">Derecho de oposición:</span> Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos 
                        de carácter personal o se cese el tratamiento de los mismos por parte de www.marianaranjopsicologa.es .
                    </p>
                    <p>
                        <span style="font-weight: bold;">
                            Derecho a no ser a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles:
                        </span> 
                        Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, 
                        incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.
                    </p>
                    <p>
                        Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al responsable del tratamiento con la referencia «RGPD-«, especificando:
                    </p>
                    <p>
                        Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por 
                        el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser 
                        sustituida, por cualquier otro medio válido en derecho que acredite la identidad.
                    </p>

                    <ul>
                        <li>Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.</li>
                        <li>Domicilio a efecto de notificaciones.</li>
                        <li>Fecha y firma del solicitante.</li>
                        <li>Todo documento que acredite la petición que formula.</li>
                        <li>Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:</li>
                        <li>Dirección postal:</li>
                        <li>Correo electrónico:</li>
                    </ul>
                    <br>

                    <h4>ENLACES A SITIOS WEB DE TERCEROS</h4>
                    <p>
                        El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de 
                        <a href="http://www.marianaranjopsicologa.es/">www.marianaranjopsicologa.es</a>, y que por tanto no son operados por Maria T. Naranjo Navarro. 
                        Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de 
                        sus propios ficheros y de sus propias prácticas de privacidad. 
                    </p>
                    <br>

                    <h4>RECLAMACIONES ANTE LA AUTORIDAD DE CONTROL</h4>
                    <p>
                        En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus 
                        datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, 
                        en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de 
                        control es la Agencia Española de Protección de Datos (http://www.agpd.es).
                    </p>
                    <br>

                    <h4>II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h4>
                    <p>
                        Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal 
                        contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el responsable del tratamiento 
                        pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación 
                        de la Política de Privacidad de este.
                    </p>
                    <p>
                        Se reserva el derecho a modificar su Política de Privacidad, de acuerdo con su propio criterio, o motivado por un cambio legislativo, 
                        jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no 
                        serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos 
                        cambios o actualizaciones.
                    </p>
                    <p>
                        Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril 
                        de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de 
                        estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.
                    </p>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="firma = true">Firmar</v-btn>
                    <v-btn color="red" text @click="closeDialogFirma">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="firma" width="600">
            <v-card>
                <v-card-text>
                    <MyCanvasComponent :modelValue="canvas" @update:modelValue="handleCanvasUpdate"/>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="firmarConsentimiento">Guardar</v-btn>
                    <v-btn color="red" text @click="firma = false">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!--<v-row>
            <v-col cols="12" md="10" class="offset-md-1">
                <v-card>
                    <v-card-title>Opciones Extras Usuario</v-card-title>
                    <v-tabs horizontal>
                        <v-tab>
                            Archivos
                        </v-tab>
                        <v-tab>
                            Citas
                        </v-tab>
                        <v-tab-item class="pa-3 ma-1">
                            <v-card flat>
                                <v-data-table :headers="headers" :search="search"  :items="archivos" item-key="id" class="elevation-1">
                                    <template v-slot:item.action="{ item }">
                                        <v-icon @click="verArchivo(item)" small class="mr-2" color="red">
                                            mdi-eye
                                        </v-icon>
                                        <v-icon @click="deleteUser(item)" small class="mr-2" color="red">
                                            mdi-trash-can
                                        </v-icon>
                                    </template>
                                </v-data-table>                                
                            </v-card>
                        </v-tab-item>
                        <v-tab-item class="pa-3 ma-1">
                            <v-card flat>
                                citaaaaaaaaaaaas
                            </v-card>
                        </v-tab-item>
                        
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row> -->      

        <v-dialog persistent v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="headline">Eliminar Usuario</v-card-title>
                <v-card-text>
                    <p>Se eliminaran todas las citas asociadas</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :loading="isloading" color="red" dark @click="deleteUsuario">Eliminar</v-btn>
                    <v-btn color="red" outlined text @click="dialog = false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import DateSelect from "../../../global_components/dateSelect.vue"
import MyCanvasComponent from './Canvas.vue'
import { required, email } from '../../../validationRules'
export default {
    components : {
        MyCanvasComponent,
        DateSelect
    },
    data() {
        return {

            required:required,
            email:email,
            validForm: true,
            dialogFirma: false,
            search: '',
            dialog: false,
            tipo: '',
            tipos_archivo:[
                {
                    id:0,
                    nombre:'DIETA'
                },
                {
                    id:1,
                    nombre:'ENTRENAMIENTO'
                }
            ],
            archivos:[],
            usuario: {
                id: '',
                nombre: '',
                apellidos: '',
                email: '',
                telefono: '',
                adoptar: 0,
                donar: 0,
                codigo: '',
                observaciones: '',
                avatar: null,
                password: null,
                direccion:'',
                profesion:'',
                consulta:'',
                antecedentes:'',
                tratamiento:'',
                politica1:false,
                politica2:false,
                politica3:false,
                politica4:false,
                fechafirma:''
            },
            direccion:{
                id:'',
                app_usuario_id:'',
                nombre:'',
                direccion:''
            },
            headers: [{
                    text: 'Nombre',
                    align: 'left',
                    value: 'nombre',
                },
                {
                    text: 'Tipo',
                    align: 'left',
                    value: 'nombre',
                },
                {
                    text: 'Acciones',
                    value: 'action',
                    sortable: false
                },
            ],
            menu: false,
            firma: false,
            canvas: null
        }
    },
    created() {
        if (this.$route.query.id) {
            this.getUsuario(this.$route.query.id)
        }
        //this.getDonante();
        this.getArchivos(this.$route.query.id);
    },
    methods: {
        getDonante(){
            if (this.$route.query.tipo == 'donante') {
                this.usuario.donar = 1;
            }
            else
            {
                this.usuario.donar = 0;
            }
        },
        getUsuario(usuario_id) {
            axios.get(`api/app/getusuario/${usuario_id}`).then(res => {
                this.usuario = res.data
            }, res => {
                this.$toast.error('Algo ha salido mal')
            })
        },

        getArchivos(usuario_id) {
            axios.get(`api/app/getarchivos/${usuario_id}`).then(res => {
                
                this.archivos = res.data
            }, res => {
                this.$toast.error('Error al cargar archivos')
            })
        },

        saveUsuario() {
            this.$refs.form.validate()

            if(this.validForm){
                axios.post('api/app/saveusuario', this.usuario).then(res => {
                    this.$router.push('lista-usuarios-app')
                }, res => {
                    this.$toast.error('Algo ha salido mal')
                })
            }
        },
        /*saveDireccion() {
            this.direccion.app_usuario_id = this.usuario.id
            axios.post('api/app/save-direccion-from-user', this.direccion).then(res => {
                this.usuario.direccion = res.data
                this.resertFormDireccion();
            }, res => {
                this.$toast.error('Algo ha salido mal')
            })
        },*/
        setDireccion(direccion) {
            this.direccion = direccion
        },
        resertFormDireccion(){
            this.direccion ={
                id:'',
                app_usuario_id:'',
                nombre:'',
                direccion:''
            }
        },
        deleteUsuario() {
            axios.get(`api/app/deleteusuario/${this.usuario.id}`).then(res => {
                this.dialog = false
                this.$router.push('lista-usuarios-app')
            }, res => {
                this.$toast.error('Algo ha salido mal')
            })
        },
        /*deleteDireccion(direccion) {
            axios.get(`api/app/delete-direccion/${direccion.id}`).then(res => {
                let i = this.usuario.direccion.findIndex(x => x.id == direccion.id)
                this.usuario.direccion.splice(i, 1)
            }, res => {
                this.$toast.error('Algo ha salido mal')
            })
        },*/

        fileChanged(base_64) {
            this.usuario.avatar = base_64
        },
        closeDialogFirma(){
            this.dialogFirma = false
        },
        handleCanvasUpdate(updatedCanvas) {
            this.canvas = updatedCanvas;
        },
        firmarConsentimiento(){
            let data = {
                usuario:this.usuario,
                id: this.usuario.id,
                // consentimiento1: this.usuario.consentimiento1,
                // consentimiento2: this.usuario.consentimiento2,
                // consentimiento3: this.usuario.consentimiento3,
                // consentimiento4: this.usuario.consentimiento4,
                firma: this.canvas
            }

            // Envía la imagen al servidor
            axios.post('api/app/firmar-consentimiento', data)
            .then(response => {
                // console.log('Imagen guardada en el servidor:', response.data.url);
                // Actualiza la URL de la firma en tu componente o en tu base de datos
                // this.rutaFirma = response.data.url;
                this.firma = false
                this.closeDialogFirma()
                this.usuario = response.data.user
                // this.$router.push(`/guardar-usuario-app?id=${this.usuario.id}`);
            })
            .catch(error => {
                console.error('Error, por favor, revisa la información', error);
            });
        }
    },
    computed: {
        isloading() {
            return this.$store.getters.getloading
        }
    }
}
</script>

<style>
div.v-messages.theme--light,
div.v-text-field__details
{
    display: none !important;
}
</style>